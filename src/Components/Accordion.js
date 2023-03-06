import AccordianBar from "./AccordionBar";

function Accordion(props) => {
  return <>
    props.items.map((item)=><AccordianBar heading={item.heading} body={item.body}/>)
  </>
}