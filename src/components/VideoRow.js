import "./VideoRow.css";
function VideoRow({
  image,
  subs,
  views,
  description,
  timestamp,
  channel,
  title,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt={channel} className="videoRow__thumbnail" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span>Subscribers
          </span>{" "}
          {views} . {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
