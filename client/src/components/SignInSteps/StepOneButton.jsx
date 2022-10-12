import "./StepOneButton.css"

function StepOneButton({ img, title, description, eventFn }) {
  return (
    <div onClick={() => eventFn(title)} className='stepOne-button'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default StepOneButton;
