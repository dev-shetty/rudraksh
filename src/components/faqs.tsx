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
        <Accordion type="single" collapsible className="w-11/12 lg:w-1/2">
          <AccordionItem value="question-1">
            <AccordionTrigger>What is Rudraksh and how does it work?</AccordionTrigger>
            <AccordionContent>Rudraksh is an AI-driven application designed to enhance plant well-being. It uses advanced machine learning algorithms to analyze images of plant leaves, detect diseases, and provide remedies for healthier plants. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-2">
            <AccordionTrigger>How accurate is Rudraksh&apos;s disease detection?</AccordionTrigger>
            <AccordionContent>Rudraksh&apos;s accuracy is backed by a robust CNN model trained on a dataset of 87,000 images. While no model is perfect, our continuous learning and improvement processes ensure high accuracy levels. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-3">
            <AccordionTrigger>What benefits does Rudraksh offer over traditional plant care methods?</AccordionTrigger>
            <AccordionContent>Rudraksh bridges traditional wisdom and modern innovation, offering an instant diagnosis of plant diseases and personalized remedies. It brings convenience, accuracy, and actionable insights to plant care. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-4">
            <AccordionTrigger>What kind of plants does Rudraksh cater to?</AccordionTrigger>
            <AccordionContent>Rudraksh is designed to assist a wide range of plants, from ornamentals to crops. Its AI can detect diseases in various types of leaves, helping both home gardeners and farmers. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-5">
            <AccordionTrigger>How secure is the data I upload to Rudraksh?</AccordionTrigger>
            <AccordionContent>Your data security is a priority. We employ industry-standard encryption protocols and take every measure to ensure your uploaded images and information remain private and secure. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-6">
            <AccordionTrigger>Can Rudraksh provide preventative measures to avoid plant diseases?</AccordionTrigger>
            <AccordionContent>Yes, Rudraksh not only identifies diseases but also offers insights and suggestions to prevent future occurrences. This proactive approach helps maintain healthier plants in the long run. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-7">
            <AccordionTrigger>Is Rudraksh&apos;s AI capable of recognizing multiple diseases?</AccordionTrigger>
            <AccordionContent>Absolutely. Our AI model is trained on a diverse dataset, enabling it to recognize and diagnose a variety of plant diseases, ensuring comprehensive support for your plants&apos; well-being. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-8">
            <AccordionTrigger>What if I have a unique or uncommon plant? Can Rudraksh still help?</AccordionTrigger>
            <AccordionContent>Rudraksh&apos;s AI has been trained on a broad range of plants, and its capabilities extend to many species. While it might encounter limitations in extremely rare cases, our team is continuously working to improve coverage. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-9">
            <AccordionTrigger>How do I access Rudraksh&apos;s features?</AccordionTrigger>
            <AccordionContent>Simply access our user-friendly platform, upload a clear image of your plant&apos;s leaf, and Rudraksh&apos;s AI will do the rest, providing disease detection and personalized recommendations. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-10">
            <AccordionTrigger>How can I provide feedback or report an issue with Rudraksh?</AccordionTrigger>
            <AccordionContent>We value your input! Feel free to reach out through our provided contact channels or feedback forms. Your feedback helps us refine and enhance Rudraksh&apos;s capabilities.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
