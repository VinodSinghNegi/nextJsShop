export default function Success({ name }) {
  return (
    <center
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        marginTop: 60,
        padding: 20,
      }}
    >
      <h2>
        <p> Congratulations {name.toUpperCase()}</p>
        <p>You have successfully completed the demo .</p>
      </h2>
      <p
        style={{
          display: "flex",
          justifyContent: "flex-end",
          fontSize: 10,
          margin: 5,
        }}
      >
        forget about the phone now . LOL !!
      </p>
    </center>
  );
}
