const ContactItem = (props) => (
  <div className="contact-item">
    <div className="icon text-center">
      <span className={`fa fa-${props.icon} fa-fw`}></span>
    </div>
    <div>
      <a href={props.url}>
        {props.service ? <div className="title">{props.service}</div> : null}
        <div className={`description description-${props.icon}`}>
          {props.children}
        </div>
      </a>
    </div>
  </div>
);

export default ContactItem;
