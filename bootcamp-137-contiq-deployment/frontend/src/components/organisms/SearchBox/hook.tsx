import { useState } from 'react'

const useStateForSearchBox = (
  initialCounter = 0,
  initialExpanded = false,
  initialShowSnackbar = false,
  maxCounter = 0
) => {
  const [counter, setCounter] = useState(initialCounter)
  const [expanded, setExpanded] = useState(initialExpanded)
  const [showSnackbar, setShowSnackbar] = useState(initialShowSnackbar)

  const decrement = () => {
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0))
  }

  const increment = () => {
    setCounter((prevCounter) => Math.min(prevCounter + 1, maxCounter - 1))
  }

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  return {
    counter,
    expanded,
    showSnackbar,
    setShowSnackbar,
    decrement,
    increment,
    handleExpand,
  }
}

export default useStateForSearchBox
