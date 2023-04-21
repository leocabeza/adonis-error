import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

enum ShipmentStatusEnum {
  PAID = 'PAID',
  WILL_PAY_CASH = 'WILL_PAY_CASH',
  WILL_PAY_ONLY_DELIVERY = 'WILL_PAY_ONLY_DELIVERY',
}

interface Iproduct {
  id: number
  quantity: number
}

interface IobjectProduct {
  [key: string]: Iproduct
}

export default class OrdersController {
  private orderValidation = {
    messages: {
      'addressId.required': 'La dirección es requerida',
      'clientId.required': 'El cliente es requerido',
      'deliveryDate.after': 'La fecha de entrega debe ser mayor al día de hoy',
      'deliveryDate.required': 'La fecha de entrega es requerida',
      'discount.unsigned': 'El descuento debe ser un número positivo',
      'shipmentCost.unsigned': 'El costo debe ser un número positivo',
      'shipmentStatus.required': 'El estado es requerido',
    },
    schema: schema.create({
      addressId: schema.number([rules.unsigned()]),
      clientId: schema.number([rules.unsigned()]),
      deliveryDate: schema.date(
        {
          format: 'dd/MM/yyyy',
        },
        [rules.afterOrEqual('today')]
      ),
      discount: schema.number.optional([rules.unsigned()]),
      isPackaged: schema.boolean.optional(),
      observations: schema.string.optional([rules.maxLength(200), rules.escape(), rules.trim()]),
      shipmentCost: schema.number.optional([rules.unsigned()]),
      shipmentStatus: schema.enum(Object.values(ShipmentStatusEnum)),
    }),
  }

  private convertProductsToArray = (products: IobjectProduct | Iproduct): Iproduct[] => {
    if (Array.isArray(products)) {
      return products
    }

    return Object.values(products).reduce((prev: Iproduct[], current: Iproduct) => {
      prev.push(current)

      return prev
    }, [])
  }

  public async create({ view }: HttpContextContract) {
    return view.render('orders/create', {
      clients: [
        { id: 1, formattedName: 'Name1', addresses: [{ id: 1, line_1: 'Address 1'}] },
        { id: 2, formattedName: 'Name2', addresses: [{ id: 2, line_1: 'Address 2'}] },
      ],
      products: [
        { id: 1, name: 'product1' },
        { id: 2, name: 'product2' },
        { id: 3, name: 'product3' },
        { id: 4, name: 'product4' },
        { id: 5, name: 'product5' },
        { id: 6, name: 'product6' },
        { id: 7, name: 'product7' },
        { id: 8, name: 'product8' },
        { id: 9, name: 'product9' },
        { id: 10, name: 'product10' },
        { id: 11, name: 'product11' },
        { id: 12, name: 'product12' },
        { id: 13, name: 'product13' },
        { id: 14, name: 'product14' },
        { id: 15, name: 'product15' },
        { id: 16, name: 'product16' },
        { id: 17, name: 'product17' },
        { id: 18, name: 'product18' },
        { id: 19, name: 'product19' },
        { id: 20, name: 'product20' },
        { id: 21, name: 'product21' },
        { id: 22, name: 'product22' },
        { id: 23, name: 'product23' },
        { id: 24, name: 'product24' },
        { id: 25, name: 'product25' },
        { id: 26, name: 'product26' },
        { id: 27, name: 'product27' },
        { id: 28, name: 'product28' },
        { id: 29, name: 'product29' },
        { id: 30, name: 'product30' },
        { id: 31, name: 'product31' },
        { id: 32, name: 'product32' },
        { id: 33, name: 'product33' },
        { id: 34, name: 'product34' },
        { id: 35, name: 'product35' },
        { id: 36, name: 'product36' },
        { id: 37, name: 'product37' },
        { id: 38, name: 'product38' },
        { id: 39, name: 'product39' },
        { id: 40, name: 'product40' },
        { id: 41, name: 'product41' },
        { id: 42, name: 'product42' },
        { id: 43, name: 'product43' },
        { id: 44, name: 'product44' },
        { id: 45, name: 'product45' },
        { id: 46, name: 'product46' },
        { id: 47, name: 'product47' },
        { id: 48, name: 'product48' },
        { id: 49, name: 'product49' },
        { id: 50, name: 'product50' },
        { id: 51, name: 'product51' },
        { id: 52, name: 'product52' },
        { id: 53, name: 'product53' },
        { id: 54, name: 'product54' },
        { id: 55, name: 'product55' },
        { id: 56, name: 'product56' },
        { id: 57, name: 'product57' },
        { id: 58, name: 'product58' },
        { id: 59, name: 'product59' },
        { id: 60, name: 'product60' },
        { id: 61, name: 'product61' },
        { id: 62, name: 'product62' },
        { id: 63, name: 'product63' },
        { id: 64, name: 'product64' },
        { id: 65, name: 'product65' },
        { id: 66, name: 'product66' },
        { id: 67, name: 'product67' },
        { id: 68, name: 'product68' },
        { id: 69, name: 'product69' },
        { id: 70, name: 'product70' },
        { id: 71, name: 'product71' },
        { id: 72, name: 'product72' },
        { id: 73, name: 'product73' },
        { id: 74, name: 'product74' },
        { id: 75, name: 'product75' },
        { id: 76, name: 'product76' },
        { id: 77, name: 'product77' },
        { id: 78, name: 'product78' },
        { id: 79, name: 'product79' },
        { id: 80, name: 'product80' },
        { id: 81, name: 'product81' },
        { id: 82, name: 'product82' },
        { id: 83, name: 'product83' },
        { id: 84, name: 'product84' },
        { id: 85, name: 'product85' },
        { id: 86, name: 'product86' },
        { id: 87, name: 'product87' },
        { id: 88, name: 'product88' },
        { id: 89, name: 'product89' },
        { id: 90, name: 'product90' },
        { id: 91, name: 'product91' },
        { id: 92, name: 'product92' },
        { id: 93, name: 'product93' },
        { id: 94, name: 'product94' },
        { id: 95, name: 'product95' },
        { id: 96, name: 'product96' },
        { id: 97, name: 'product97' },
        { id: 98, name: 'product98' },
        { id: 99, name: 'product99' },
        { id: 100, name: 'product100' },
      ]
    })
  }

  public async store({ logger, request, response, session }: HttpContextContract) {
    let payload = {}
    session.flashExcept(['_csrf'])

    try {
      await request.validate(this.orderValidation)
    } catch (error) {
      payload = error.messages
    }

    logger.info(
      'order create - Array.isArray(products): %s',
      JSON.stringify(Array.isArray(request.only(['products']).products))
    )
    const productsArray = this.convertProductsToArray(request.only(['products']).products)
    const productsBody = productsArray.filter((product) => product.quantity > 0)

    if (!productsBody.length) {
      payload = {
        ...payload,
        products: ['Debe añadir al menos 1 producto'],
      }
    }

    if (Object.values(payload).length > 0) {
      logger.info('order create - payload: %s', JSON.stringify({ payload }))

      session.flash({
        errors: payload,
      })

      return response.redirect().withQs().toRoute('orders.create')
    }

    session.flash('success', '¡La Órden fue creada con éxito!')
    response.redirect().toRoute('orders.create')
  }
}
