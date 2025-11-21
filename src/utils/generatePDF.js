import jsPDF from 'jspdf'
import { strings, experience, education, skills, languages } from '../constants/strings'

export const generateCVPDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 15
  const contentWidth = pageWidth - (margin * 2)
  let yPosition = margin

  // Colores del sitio (dark mode) - Paleta vibrante
  const darkBg = [1, 1, 30] //rgb(1, 1, 30)
  const darkSurface = [21, 21, 32] //rgb(9, 89, 68)
  const darkCard = [26, 26, 46] // #1a1a2e
  const darkBorder = [42, 42, 62] // #2a2a3e
  const accentBlue = [0, 217, 255] // #00d9ff - Cyan eléctrico
  const accentPurple = [173, 80, 255] //rgb(173, 80, 255) - Morado vibrante
  const accentPink = [89, 45, 117] //rgb(189, 45, 117) - Rosa vibrante
  const textLight = [255, 255, 255]
  const textGray = [156, 163, 175]
  const textGrayDark = [107, 114, 128]

  // Establecer fondo oscuro en todas las páginas
  const setDarkBackground = () => {
    doc.setFillColor(darkBg[0], darkBg[1], darkBg[2])
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
  }

  // Función auxiliar para calcular altura del texto sin dibujar
  const calculateTextHeight = (text, options = {}) => {
    const {
      fontSize = 12,
      maxWidth = contentWidth,
      lineHeight = 0.35
    } = options
    
    doc.setFontSize(fontSize)
    const lines = doc.splitTextToSize(text, maxWidth)
    return lines.length * fontSize * lineHeight
  }

  // Función auxiliar para agregar texto con wrap (más compacta)
  const addText = (text, x, y, options = {}) => {
    const {
      fontSize = 12,
      color = textLight,
      font = 'helvetica',
      style = 'normal',
      maxWidth = contentWidth,
      align = 'left',
      lineHeight = 0.35 // Más compacto
    } = options

    doc.setFont(font, style)
    doc.setFontSize(fontSize)
    doc.setTextColor(color[0], color[1], color[2])
    
    const lines = doc.splitTextToSize(text, maxWidth)
    doc.text(lines, x, y, { align })
    return y + (lines.length * fontSize * lineHeight)
  }

  // Función para dibujar card con borde delgado y oscuro
  const drawCard = (x, y, width, height, padding = 3) => {
    // Card background
    doc.setFillColor(darkCard[0], darkCard[1], darkCard[2])
    doc.roundedRect(x, y, width, height, 2, 2, 'F')
    
    // Borde delgado y oscuro
    const darkerBorder = [15, 15, 25] // Color más oscuro que darkBorder
    doc.setDrawColor(darkerBorder[0], darkerBorder[1], darkerBorder[2])
    doc.setLineWidth(0.2)
    doc.roundedRect(x, y, width, height, 2, 2, 'S')
    
    return { x: x + padding, y: y + padding, width: width - (padding * 2), height: height - (padding * 2) }
  }

  // Primera página - Header con contacto
  setDarkBackground()
  
  // Header con gradiente vibrante (simulado con múltiples rectángulos)
  const headerHeight = 50
  const gradientSteps = 1000 // Más pasos para gradiente más suave
  
  // Función para interpolar colores
  const interpolateColor = (color1, color2, factor) => {
    return [
      Math.round(color1[0] + (color2[0] - color1[0]) * factor),
      Math.round(color1[1] + (color2[1] - color1[1]) * factor),
      Math.round(color1[2] + (color2[2] - color1[2]) * factor)
    ]
  }
  
  // Crear gradiente de izquierda a derecha: azul -> morado -> rosa
  // Dibujar rectángulos con superposición para evitar líneas negras
  const stepWidth = pageWidth / gradientSteps
  
  // Asegurar que no haya bordes dibujándose
  doc.setLineWidth(0)
  
  for (let i = 0; i < gradientSteps; i++) {
    const factor = i / (gradientSteps - 1)
    let color
    
    if (factor < 0.5) {
      // Primera mitad: azul a morado
      const localFactor = factor * 2
      color = interpolateColor(accentBlue, accentPurple, localFactor)
    } else {
      // Segunda mitad: morado a rosa
      const localFactor = (factor - 0.5) * 2
      color = interpolateColor(accentPurple, accentPink, localFactor)
    }
    
    doc.setFillColor(color[0], color[1], color[2])
    // Dibujar rectángulos con pequeña superposición para evitar líneas visibles
    const x = Math.max(0, i * stepWidth - 0.05)
    const width = stepWidth + 0.1
    // Asegurar que no se salga del ancho de página
    const actualWidth = Math.min(width, pageWidth - x)
    doc.rect(x, 0, actualWidth, headerHeight, 'F')
  }
  
  yPosition = 18
  addText(strings.realName, margin, yPosition, {
    fontSize: 26,
    color: textLight,
    font: 'helvetica',
    style: 'bold'
  })
  
  yPosition = 26
  addText(strings.cvTitle, margin, yPosition, {
    fontSize: 13,
    color: textLight,
    font: 'helvetica',
    style: 'normal'
  })

  // Información de contacto en el header (lado derecho)
  const contactInfo = [
    strings.links.email.replace('mailto:', ''),
    strings.links.linkedin,
    strings.links.github
  ]
  
  let contactY = 20
  contactInfo.forEach((info) => {
    addText(info, pageWidth - margin, contactY, {
      fontSize: 8,
      color: textLight,
      align: 'right',
      maxWidth: pageWidth - (margin * 2),
      lineHeight: 0.3
    })
    contactY += 3.5
  })

  yPosition = headerHeight + 10

  // Experiencia
  addText(strings.cv.sections.experience, margin, yPosition, {
    fontSize: 20,
    color: textLight,
    font: 'helvetica',
    style: 'bold'
  })
  yPosition += 8

  experience.forEach((exp, index) => {
    if (yPosition > pageHeight - 50) {
      doc.addPage()
      setDarkBackground()
      yPosition = margin
    }

    // Calcular altura necesaria para la card usando exactamente el mismo método que al dibujar
    const padding = 5
    const cardContentWidth = contentWidth - (padding * 2)
    
    // Calcular altura usando la misma función que addText
    let calculatedHeight = 4 // padding superior
    
    // Título
    calculatedHeight += calculateTextHeight(exp.title, {
      fontSize: 14,
      maxWidth: cardContentWidth,
      lineHeight: 0.32
    })
    calculatedHeight += 1 // espacio después del título
    
    // Empresa
    calculatedHeight += calculateTextHeight(exp.company, {
      fontSize: 10.5,
      maxWidth: cardContentWidth * 0.6,
      lineHeight: 0.3
    })
    calculatedHeight += 1 // espacio después de empresa
    
    // Ubicación
    const locationType = `${exp.location}${exp.type ? ` · ${exp.type}` : ''}`
    calculatedHeight += calculateTextHeight(locationType, {
      fontSize: 8.5,
      maxWidth: cardContentWidth,
      lineHeight: 0.3
    })
    calculatedHeight += 1.5 // espacio después de ubicación
    
    // Descripción
    calculatedHeight += calculateTextHeight(exp.description, {
      fontSize: 9,
      maxWidth: cardContentWidth,
      lineHeight: 0.32
    })
    
    // Padding inferior
    calculatedHeight += 2
    
    // Agregar margen de seguridad más generoso para asegurar que la card sea lo suficientemente grande
    const cardHeight = Math.ceil(calculatedHeight) + 3
    
    // Card de experiencia
    const expCard = drawCard(margin, yPosition, contentWidth, cardHeight, padding)
    // Calcular posición vertical dentro de la card
    const cardStartY = expCard.y + 2

    // Título del puesto (más bold y grande)
    let cardY = addText(exp.title, expCard.x, cardStartY, {
      fontSize: 14,
      color: textLight,
      font: 'helvetica',
      style: 'bold',
      maxWidth: expCard.width,
      lineHeight: 0.32
    })
    cardY += 1 // espacio después del título

    // Empresa en azul
    addText(exp.company, expCard.x, cardY, {
      fontSize: 10.5,
      color: accentBlue,
      maxWidth: expCard.width * 0.6,
      lineHeight: 0.3
    })
    
    // Período en morado alineado a la derecha
    addText(exp.period, expCard.x + expCard.width, cardY, {
      fontSize: 9.5,
      color: textLight,
      align: 'right',
      maxWidth: expCard.width * 0.4,
      lineHeight: 0.3
    })
    cardY += calculateTextHeight(exp.company, {
      fontSize: 10.5,
      maxWidth: expCard.width * 0.6,
      lineHeight: 0.3
    }) + 1

    // Ubicación y tipo
    cardY = addText(locationType, expCard.x, cardY, {
      fontSize: 8.5,
      color: textGrayDark,
      maxWidth: expCard.width,
      lineHeight: 0.3
    })
    cardY += 1.5 // espacio después de ubicación

    // Descripción (más compacta)
    cardY = addText(exp.description, expCard.x, cardY, {
      fontSize: 9,
      color: textGray,
      maxWidth: expCard.width,
      lineHeight: 0.32
    })
    
    yPosition = yPosition + cardHeight + 6
  })

  // Nueva página para Educación y Habilidades
  doc.addPage()
  setDarkBackground()
  yPosition = margin

  // Educación
  addText(strings.cv.sections.education, margin, yPosition, {
    fontSize: 20,
    color: textLight,
    font: 'helvetica',
    style: 'bold'
  })
  yPosition += 8

  education.forEach((edu) => {
    const padding = 5
    const contentAreaWidth = contentWidth - (padding * 2)
    const eduDescLines = edu.description ? doc.splitTextToSize(edu.description, contentAreaWidth) : []
    
    // Calcular altura considerando todos los elementos usando los mismos valores que al dibujar
    const titleLines = doc.splitTextToSize(edu.degree, contentAreaWidth)
    const titleHeight = titleLines.length * 14 * 0.32
    const institutionHeight = 10.5 * 0.3
    const periodHeight = 9.5 * 0.3
    const descHeight = eduDescLines.length * 9 * 0.32
    const eduCardHeight = 2 + titleHeight + 1 + institutionHeight + 1 + periodHeight + 1.5 + descHeight + 2
    
    const eduCard = drawCard(margin, yPosition, contentWidth, eduCardHeight, padding)
    const eduStartY = eduCard.y + 2

    addText(edu.degree, eduCard.x, eduStartY, {
      fontSize: 14,
      color: textLight,
      font: 'helvetica',
      style: 'bold',
      maxWidth: eduCard.width,
      lineHeight: 0.32
    })
    let eduY = eduStartY + titleHeight + 1

    addText(edu.institution, eduCard.x, eduY, {
      fontSize: 10.5,
      color: accentBlue,
      maxWidth: eduCard.width,
      lineHeight: 0.3
    })
    eduY += institutionHeight + 1

    addText(edu.period, eduCard.x, eduY, {
      fontSize: 9.5,
      color: textGrayDark,
      maxWidth: eduCard.width,
      lineHeight: 0.3
    })
    eduY += periodHeight + 1.5

    if (edu.description) {
      eduY = addText(edu.description, eduCard.x, eduY, {
        fontSize: 9,
        color: textGray,
        maxWidth: eduCard.width,
        lineHeight: 0.32
      })
    }
    
    yPosition = yPosition + eduCardHeight + 6
  })

  yPosition += 3

  // Habilidades
  addText(strings.cv.sections.skills, margin, yPosition, {
    fontSize: 20,
    color: textLight,
    font: 'helvetica',
    style: 'bold'
  })
  yPosition += 8

  // Organizar habilidades en una cuadrícula (3 columnas)
  const skillsPerRow = 3
  const skillItemHeight = 8
  const skillItemWidth = (contentWidth - 10) / skillsPerRow
  const skillSpacing = 5

  let currentRow = 0
  let currentCol = 0

  let startY = yPosition
  
  skills.forEach((skill, index) => {
    // Verificar si necesitamos una nueva página
    const skillY = startY + (currentRow * (skillItemHeight + skillSpacing))
    if (skillY + skillItemHeight > pageHeight - 40) {
      doc.addPage()
      setDarkBackground()
      startY = margin + 10
      yPosition = margin + 10
      currentRow = 0
      currentCol = 0
    }

    const x = margin + (currentCol * (skillItemWidth + skillSpacing))
    const finalSkillY = startY + (currentRow * (skillItemHeight + skillSpacing))

    // Dibujar card pequeña para cada habilidad
    const skillCard = drawCard(x, finalSkillY, skillItemWidth, skillItemHeight, 2)
    
    // Punto decorativo con color de acento
    doc.setFillColor(accentBlue[0], accentBlue[1], accentBlue[2])
    doc.circle(skillCard.x + 1.5, skillCard.y + 3, 1, 'F')
    
    // Nombre de la habilidad
    addText(skill.name, skillCard.x + 4, skillCard.y + 3, {
      fontSize: 8.5,
      color: textLight,
      maxWidth: skillItemWidth - 6,
      lineHeight: 0.3
    })

    // Actualizar posición para siguiente habilidad
    currentCol++
    if (currentCol >= skillsPerRow) {
      currentCol = 0
      currentRow++
    }
  })

  // Actualizar yPosition después de todas las habilidades
  const finalSkillY = startY + (currentRow * (skillItemHeight + skillSpacing))
  yPosition = finalSkillY + skillItemHeight + 10 // Aumentar margen de 5 a 10

  // Idiomas
  if (yPosition > pageHeight - 40) {
    doc.addPage()
    setDarkBackground()
    yPosition = margin + 10
  }

  addText(strings.cv.sections.languages, margin, yPosition, {
    fontSize: 20,
    color: textLight,
    font: 'helvetica',
    style: 'bold'
  })
  yPosition += 8

  // Mostrar idiomas en una cuadrícula de 2 columnas
  const languageItemWidth = (contentWidth - 5) / 2
  const languageItemHeight = 10
  const languageSpacing = 5
  let languageStartY = yPosition

  languages.forEach((language, index) => {
    const row = Math.floor(index / 2)
    const col = index % 2
    const languageY = languageStartY + (row * (languageItemHeight + languageSpacing))

    // Verificar si necesitamos nueva página
    if (languageY + languageItemHeight > pageHeight - 40) {
      doc.addPage()
      setDarkBackground()
      languageStartY = margin + 10
      yPosition = margin + 10
    }

    const x = margin + (col * (languageItemWidth + languageSpacing))
    const finalLanguageY = languageStartY + (row * (languageItemHeight + languageSpacing))

    // Dibujar card para cada idioma
    const languageCard = drawCard(x, finalLanguageY, languageItemWidth, languageItemHeight, 3)
    
    // Nombre del idioma
    addText(language.name, languageCard.x, languageCard.y + 3, {
      fontSize: 10,
      color: textLight,
      font: 'helvetica',
      style: 'bold',
      maxWidth: languageItemWidth - 20,
      lineHeight: 0.3
    })
    
    // Nivel del idioma alineado a la derecha
    addText(language.level, languageCard.x + languageItemWidth - 6, languageCard.y + 3, {
      fontSize: 9,
      color: accentPurple,
      align: 'right',
      maxWidth: 20,
      lineHeight: 0.3
    })
  })

  // Actualizar yPosition después de los idiomas
  const languagesRows = Math.ceil(languages.length / 2)
  yPosition = languageStartY + (languagesRows * (languageItemHeight + languageSpacing)) + 5

  // Portfolio
  if (yPosition > pageHeight - 40) {
    doc.addPage()
    setDarkBackground()
    yPosition = margin + 10
  }

  addText(strings.cv.sections.portfolio, margin, yPosition, {
    fontSize: 20,
    color: textLight,
    font: 'helvetica',
    style: 'bold'
  })
  yPosition += 8

  const portfolioCardHeight = 15
  const portfolioCard = drawCard(margin, yPosition, contentWidth, portfolioCardHeight, 5)
  
  // Icono de globo (simulado con círculo)
  doc.setFillColor(accentBlue[0], accentBlue[1], accentBlue[2])
  doc.circle(portfolioCard.x + 3, portfolioCard.y + 5, 2, 'F')
  
  // URL del portfolio
  addText(strings.links.portfolio, portfolioCard.x + 8, portfolioCard.y + 5, {
    fontSize: 12,
    color: accentBlue,
    font: 'helvetica',
    style: 'normal',
    maxWidth: portfolioCard.width - 8,
    lineHeight: 0.35
  })

  yPosition += portfolioCardHeight + 10

  // Footer en cada página con estilo dark
  const totalPages = doc.internal.pages.length - 1
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    
    // Línea decorativa con gradiente más visible
    doc.setDrawColor(accentBlue[0], accentBlue[1], accentBlue[2], 0.5)
    doc.setLineWidth(0.5)
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12)
    
    doc.setFontSize(8)
    doc.setTextColor(textGrayDark[0], textGrayDark[1], textGrayDark[2])
    doc.text(
      `${strings.siteName} · ${strings.links.email.replace('mailto:', '')}`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    )
    doc.setTextColor(textGrayDark[0], textGrayDark[1], textGrayDark[2], 0.6)
    doc.text(
      `Página ${i} de ${totalPages}`,
      pageWidth / 2,
      pageHeight - 3,
      { align: 'center' }
    )
  }

  // Guardar el PDF
  doc.save(`CV_${strings.name}_${new Date().getFullYear()}.pdf`)
}

