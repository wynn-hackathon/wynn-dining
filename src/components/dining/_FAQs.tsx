const FAQs = ({ faq }: any) => {
  return (
    <section>
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <div className="accordion" id="">
          <div className="accordion-item">
            <p className="accordion-button collapsed question" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">Accordion Item #1</p>
            <p id="collapse1" className="accordion-collapse collapse answer" data-bs-parent="#accordionExample">test 1</p>
          </div>
          <div className="accordion-item">
            <p className="accordion-button collapsed question" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Accordion Item #2</p>
            <p id="collapse2" className="accordion-collapse collapse answer" data-bs-parent="#accordionExample">test 2</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs