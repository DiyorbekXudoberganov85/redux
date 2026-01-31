import { useCallback } from 'react'
import { useSelector } from 'react-redux'

const ValidationError = () => { 
  const {error} = useSelector(state =>state.auth)
//   console.log(error)
 const errorMessages = useCallback(() => {
    // if (!error) return [];
    return Object.keys(error.errors).map(name => {
     const msg = error.errors[name].join(', ')
        return `${msg}`
    })
 }, [error])

  return (error !== null && <div className="alert alert-danger" role="alert">
  {errorMessages().join(' ')}
</div>)
//   return (error !== null && <div>Validation Error</div>)?
}

export default ValidationError