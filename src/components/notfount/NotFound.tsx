import { useEffect } from "react"
import { sharingInformationState } from "../../services/sharingInformationState"

function NotFound() {
    useEffect(() => {
        sharingInformationState.setSubject(true);
        return () => {
            sharingInformationState.setSubject(false);
        }
    }, [])

  return (
    <div>
        Not found
    </div>
  )
}
export default NotFound