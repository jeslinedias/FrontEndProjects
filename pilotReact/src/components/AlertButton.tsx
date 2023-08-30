interface Props{
  showAlert: (visiblity: boolean)=>void;
}

function AlertButton(props: Props) {
  return (
    <div>
      <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={()=>props.showAlert(true)}>
        Show Alert
      </button>
    </div>
  );
}

export default AlertButton;
