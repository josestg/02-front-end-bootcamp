import PropTypes from "prop-types";

function Post(props) {
  const { title } = props;

  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Post;
