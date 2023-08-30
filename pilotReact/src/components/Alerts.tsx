interface props {
  city: String;
  onClose: () => void;
}

function Alerts({ city, onClose }: props) {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      You are in {city}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alerts;
