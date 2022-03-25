function Comment({ comment }) {
  const nestedComments = (comment.replies || []).map((comment) => {
    return <Comment key={comment.id} comment={comment} type="child" />;
  });

  return (
    <div
      style={{
        marginLeft: "100px",
        marginTop: "10px",
        paddingLeft: "10px",
        borderLeft: "5px solid red",
      }}
    >
      {/* <h1>{comment.body}</h1> */}
      <p>
        {comment.author} {comment.points} points{" "}
        {timeDistance(Date.now(), Date.parse(comment.timestamp))}
      </p>
      <h1>{comment.body}</h1>
      <div className="buttons">
        <button>Show Replies</button>
        <button>Reply</button>
        <button>Give Award</button>
        <button>Share</button>
        <button>Report</button>
        <button>Save</button>
      </div>
      {nestedComments}
    </div>
  );
}
const timeDistance = (date1, date2) => {
  let distance = Math.abs(date1 - date2);
  const years = Math.floor(distance / 31536000000);
  distance -= years * 31536000000;
  const months = Math.floor(distance / 2628000000);
  distance -= months * 2628000000;
  const days = Math.floor(distance / 86400000);
  distance -= days * 86400000;
  const hours = Math.floor(distance / 3600000);
  distance -= hours * 3600000;
  const minutes = Math.floor(distance / 60000);
  distance -= minutes * 60000;
  const seconds = Math.floor(distance / 1000);

  if (years >= 1) {
    return `${years} year${years === 1 ? "" : "s"} ago`;
  } else if (months >= 1) {
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else if (days >= 1) {
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (hours >= 1) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (minutes >= 1) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (seconds >= 1) {
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  }
  return `${years} Years ${months} months ${days} days ${hours}:${(
    "0" + minutes
  ).slice(-2)}:${("0" + seconds).slice(-2)}`;
};

export default Comment;
