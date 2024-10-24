import Sun from '../sun/Sun'
import './SubmitModal.css'

interface Props {
  message: string
}
export default function SubmitModal({message}:Props) {
  return (
    <div className="modal-overlay" >
    <div className="modal-content">
      <div className='sun_container'><Sun /></div>
      <div className="modal-message">{message}</div>
    </div>
  </div>
  )
}
