import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function Post(props) {
  const { title, id } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    const detailURL = `/posts/${id}`;
    navigate(detailURL);
  };

  return (
    <div>
      {/* <Link to={detailURL}>
        <h4>{title}</h4>
      </Link> */}

      <h4 onClick={handleClick}>{title}</h4>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Post;
