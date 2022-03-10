import React from "react";

class Profile extends React.Component {
  // yang pertama dipanggil.
  // disini tahap initialisasi stat dan props.
  constructor(props) {
    super(props);

    this.state = { name: "", age: 0 };

    this.timer = setInterval(() => {
      console.count("tick");
    }, 1 * 1000); // 1s

    // binding.
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

    console.count("constructor dipanggil");
  }

  // setelah render pertama kali.
  // bagus kita gunakan ketika kita butuh inisialisasi data
  // yang mana datanya itu berasal dari external (API).
  componentDidMount() {
    console.count("componentDidMount dipanggil");

    const copy = Object.assign({}, this.state);

    copy.name = "Bob";
    copy.age = 25;

    this.setState(copy);
  }

  // Terjadi ketika ada perubahan props ataupun
  // perubahan state.
  shouldComponentUpdate(nextProps, nextState) {
    console.count("shouldComponentUpdate dipanggil", { nextProps, nextState });
    return true;
  }

  // Terjadi setiap kali setelah component di re-render.
  // artinya mulai dari render kedua.
  componentDidUpdate(prevProps, prevState) {
    console.count("componentDidUpdate dipanggil", { prevProps, prevState });
  }

  componentWillUnmount() {
    console.count("componentWillUnmount dipanggil");
    clearInterval(this.timer);
  }

  // Skenario pertama: Dipanggil setelah constructor.
  // Skenario kedua: Dipanggil setelah ada update
  // di props maupun di state.
  render() {
    console.count("render dipanggil");

    return (
      <ol>
        <li>Name: {this.state.name}</li>
        <li>Age : {this.state.age}</li>
        <button onClick={this.handleOnClick}>Add Age</button>
      </ol>
    );
  }

  // -- user-defined methods ---

  handleOnClick() {
    const copy = Object.assign({}, this.state);
    copy.age++;
    this.setState(copy);
  }

  handleOnChange() {}
}

export default Profile;
