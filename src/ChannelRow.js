import "./ChannelRow.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar alt={channel} src={image} className="channelRow__logo" />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default ChannelRow;
