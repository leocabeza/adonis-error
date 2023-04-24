import fs from 'fs'
import PDFDocument from 'pdfkit'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class OrdersController {
  public async create({ view }: HttpContextContract) {
    return view.render('orders/create')
  }

  public async store({ response }: HttpContextContract) {
    const path = `recibo-1.pdf`

    let doc = new PDFDocument({ margin: 50 })

    const writableStream = fs.createWriteStream(path)
    doc.pipe(writableStream)

    // Add another page
    doc
      .addPage()
      .fontSize(25)
      .text('Here is some vector graphics...', 100, 100);

    // Draw a triangle
    doc
      .save()
      .moveTo(100, 150)
      .lineTo(100, 250)
      .lineTo(200, 250)
      .fill('#FF3300');

    // Apply some transforms and render an SVG path with the 'even-odd' fill rule
    doc
      .scale(0.6)
      .translate(470, -380)
      .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
      .fill('red', 'even-odd')
      .restore();

    // Add some text with annotations
    doc
      .addPage()
      .fillColor('blue')
      .text('Here is a link!', 100, 100)
      .underline(100, 100, 160, 27, { color: '#0000FF' })
      .link(100, 100, 160, 27, 'http://google.com/');

    doc.end()

    response.header('Content-type', 'application/pdf')
    response.header('Content-length', doc.length)

    return response.stream(doc)
  }
}
