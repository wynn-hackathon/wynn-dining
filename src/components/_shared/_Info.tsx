import RichText from "../RichText"

const Info = ({ infoDining }: any) => {
  const { dressCode, hourOfOperation, location, telephoneNumber } = infoDining.fields.info.fields

  return (
    <ul className="info-box" tabIndex={0}>
      <li key={0}>
        <span className="icon"><i className="bi bi-clock"></i></span>
        <span className="info-title">hour Of Operation</span>
        {hourOfOperation}
      </li>
      <li key={1}>
        <span className="icon"><i className="bi bi-person-check"></i></span>
        <span className="info-title">dress Code</span>
        <RichText content={dressCode} />
      </li>
      <li key={2}>
        <span className="icon"><i className="bi bi-phone"></i></span>
        <span className="info-title">telephone Number</span>
        {telephoneNumber}
      </li>
      <li key={3}>
        <span className="icon"><i className="bi bi-geo-alt"></i></span>
        <span className="info-title">location</span>
        {location}
      </li>
    </ul>
  )
}

export default Info