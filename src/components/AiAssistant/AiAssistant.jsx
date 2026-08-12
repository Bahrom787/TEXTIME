import { useState } from 'react'

const copy = {
  ru: {
    title: 'ИИ-помощник',
    online: 'Онлайн',
    hello: 'Здравствуйте. Я помогу с оптовым заказом TEXTIME: партия, сроки, материалы и контакты.',
    placeholder: 'Напишите вопрос...',
    send: 'Отправить',
    quick: ['Минимальная партия?', 'Сроки?', 'Материалы?', 'Цена?', 'Контакты'],
    answers: {
      batch: 'Мы работаем с оптовыми заказами. Минимальную партию лучше уточнить по модели: напишите, какой товар нужен и примерное количество.',
      time: 'Срок зависит от модели, ткани и объема партии. После согласования образца менеджер сможет назвать точный срок.',
      fabric: 'Подбираем ткани под эконом и средний сегмент: трикотаж, хлопок, смесовые материалы и другие варианты под ваш бюджет.',
      price: 'Цена зависит от модели, ткани, размера партии и упаковки. Напишите товар и количество, мы подготовим расчет.',
      contacts: 'Для быстрого расчета напишите нам в Telegram или WhatsApp: укажите модель, количество, размеры и нужный материал.',
      fallback: 'Напишите, пожалуйста, какая модель вас интересует, количество, размеры и материал. Так мы быстрее подготовим ответ по заказу.',
    },
  },
  en: {
    title: 'AI assistant',
    online: 'Online',
    hello: 'Hello. I can help with wholesale orders: quantities, timing, fabrics and contacts.',
    placeholder: 'Ask a question...',
    send: 'Send',
    quick: ['Minimum order?', 'Timing?', 'Fabrics?', 'Price?', 'Contacts'],
    answers: {
      batch: 'We work with wholesale orders. The minimum quantity depends on the model, so send the item and approximate quantity.',
      time: 'Timing depends on the model, fabric and order volume. After sample approval, the manager can confirm the exact timeline.',
      fabric: 'We select fabrics for economy and mid-range products: knitwear, cotton, blends and other budget-friendly options.',
      price: 'Price depends on model, fabric, quantity and packaging. Send the product and amount, and we will calculate it.',
      contacts: 'For a quick quote, message us on Telegram or WhatsApp with model, quantity, sizes and fabric.',
      fallback: 'Please send the model, quantity, sizes and preferred fabric so we can answer faster.',
    },
  },
}

const getCopy = language => copy[language] || copy.ru

const getAnswer = (text, dictionary) => {
  const value = text.toLowerCase()

  if (/парт|миним|опт|quantity|minimum|order/.test(value)) return dictionary.answers.batch
  if (/срок|когда|долго|time|timing|deadline/.test(value)) return dictionary.answers.time
  if (/ткан|материал|fabric|material/.test(value)) return dictionary.answers.fabric
  if (/цен|стоим|price|cost/.test(value)) return dictionary.answers.price
  if (/контакт|тел|telegram|whatsapp|contact|phone/.test(value)) return dictionary.answers.contacts

  return dictionary.answers.fallback
}

const AiAssistant = ({ language }) => {
  const dictionary = getCopy(language)
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{ role: 'assistant', text: dictionary.hello }])

  const sendMessage = text => {
    const question = text.trim()
    if (!question) return

    setMessages(prev => [
      ...prev,
      { role: 'user', text: question },
      { role: 'assistant', text: getAnswer(question, dictionary) },
    ])
    setInput('')
  }

  const handleSubmit = event => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className={`ai-assistant ${isOpen ? 'is-open' : ''}`}>
      {isOpen && (
        <section className="ai-assistant__panel" aria-label={dictionary.title}>
          <div className="ai-assistant__header">
            <div>
              <strong>{dictionary.title}</strong>
              <span>{dictionary.online}</span>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close">
              ×
            </button>
          </div>

          <div className="ai-assistant__messages">
            {messages.map((message, index) => (
              <p className={`ai-assistant__message is-${message.role}`} key={`${message.role}-${index}`}>
                {message.text}
              </p>
            ))}
          </div>

          <div className="ai-assistant__quick">
            {dictionary.quick.map(item => (
              <button type="button" key={item} onClick={() => sendMessage(item)}>
                {item}
              </button>
            ))}
          </div>

          <form className="ai-assistant__form" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={event => setInput(event.target.value)}
              placeholder={dictionary.placeholder}
            />
            <button type="submit">{dictionary.send}</button>
          </form>
        </section>
      )}

      <button className="ai-assistant__toggle" type="button" onClick={() => setIsOpen(prev => !prev)}>
        <span>AI</span>
      </button>
    </div>
  )
}

export default AiAssistant
