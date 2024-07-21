const PartDescription = (props) => {
  return(
    <div id="part_description" className="components">
      <h3>{props.thisPageDescription.title}</h3>
      <pre>{props.thisPageDescription.text}</pre>
    </div>
  );
};

export default PartDescription;