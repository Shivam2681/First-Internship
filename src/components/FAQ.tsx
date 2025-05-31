import { useState } from 'react'
import { cn } from '../lib/utils'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
}

function FAQItem({ question, answer, isOpen, toggleOpen }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button 
        className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 flex items-center">
          <span className="mr-2">Q.</span>
          {question}
        </h3>
        <span className="text-primary ml-2 flex-shrink-0">
          {isOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4V12M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </span>
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          {answer}
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    {
      question: "How do I search for part time internships in my preferred category/profile?",
      answer: "You can use the filters in the sidebar to select 'Part-time' option and choose your preferred category or profile. You can also use the search functionality to find specific internships."
    },
    {
      question: "How can I apply for a part time internship on Internshala?",
      answer: "To apply for a part-time internship, click on the internship card to view details, then click the 'Apply now' button. You'll need to complete your profile if you haven't already done so."
    },
    {
      question: "Do I need to pay to apply for an internship on Internshala?",
      answer: "No, applying for internships on Internshala is completely free. You don't need to pay any fee to apply for internships listed on our platform."
    },
    {
      question: "What all internships are available on Internshala?",
      answer: "Internshala offers a wide range of internships across various domains including but not limited to Marketing, Software Development, Content Writing, Business Development, Data Science, HR, and many more."
    },
    {
      question: "Are there any courses that offer a placement guarantee?",
      answer: "Yes, some training programs on Internshala offer placement assistance or guarantee. Look for courses with the 'Placement Guarantee' tag in the training section."
    },
    {
      question: "How do I get certified online?",
      answer: "You can enroll in Internshala's online training programs. Upon successful completion of the program and its assignments, you will receive a certificate of training."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-6">
        <button className="inline-flex items-center text-primary font-medium text-base">
          <span>Frequently asked questions</span>
          <svg className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="space-y-0">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  )
}