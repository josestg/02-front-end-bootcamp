import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Post(props) {
  const { title, id } = props;

  const detailURL = `/posts/${id}`;

  return (
    <div>
      <Link to={detailURL}>
        <h4>{title}</h4>
      </Link>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Post;
