import Header from "@/components/header"
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion"

export default function FAQs() {
  return (
    <section className="pt-24 pb-48">
      <div>
        <Header heading="Frequently Asked Questions" />
      </div>
      <div className="mt-16 px-8 flex justify-center">
        <Accordion type="single" collapsible className="w-11/12 md:w-1/2">
          <AccordionItem value="question-1">
            <AccordionTrigger>Question 1?</AccordionTrigger>
            <AccordionContent>Answer 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-2">
            <AccordionTrigger>Question 2?</AccordionTrigger>
            <AccordionContent>Answer 2</AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-3">
            <AccordionTrigger>Question 3?</AccordionTrigger>
            <AccordionContent>Answer 3</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
