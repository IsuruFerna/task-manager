// If you have a handleChange function that looks like this:

// const handleChange = (e) => {
//    this.setState({
//       [e.target.name]: e.target.value,
//    });
// };

// You can create a custom onChange function so that it acts like an text input would:

// <input
//    type="checkbox"
//    name="check"
//    checked={this.state.check}
//    onChange={(e) => {
//       this.handleChange({
//          target: {
//             name: e.target.name,
//             value: e.target.checked,
//          },
//       });
//    }}
// />;
