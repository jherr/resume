export default (props) => (
  <div className="contact-item">
    <div className="icon pull-left text-center"><span className={`fa fa-${props.icon} fa-fw`}></span></div>
    {props.service ? <div className="title pull-right">{props.service}</div> : null}
    <div className={`description pull-right description-${props.icon}`}>
      {props.url ? <a href={props.url}>{props.children}</a> : props.children}
    </div>
  </div>
);
