import RichText from "../RichText"

export const FAQItem = ({ item, i }: any) => {
  return (
    <div className="accordion-item" >
      <div className="accordion-button collapsed question" data-bs-toggle="collapse" data-bs-target={"#collapse" + i} aria-expanded="false" aria-controls={"#collapse" + i}>{item.question}</div>
      <div id={"collapse" + i} className="accordion-collapse collapse answer" data-bs-parent="#restaurantFAQ"><RichText content={item?.answer} /></div>
    </div>
  )
}

const FAQs = ({ faq }: any) => {
  return (
    <section>
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <div className="accordion" id="restaurantFAQ">
          {faq?.fields.faqList.map((item: any, i: number) => (
            <FAQItem item={item?.fields} key={i} i={i} />
          ))
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs