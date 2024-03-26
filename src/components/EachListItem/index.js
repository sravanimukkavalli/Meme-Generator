import {Button, EachImage} from './styledComponents'

const EachListItem = props => {
  const {itemDetails, onClickImage} = props
  const {id, imageUrl} = itemDetails
  const onClickButton = () => {
    onClickImage(id)
  }

  return (
    <li key={id}>
      <Button
        data-testid={`${id.toLowerCase()}Button`}
        type="button"
        onClick={onClickButton}
      >
        <EachImage src={imageUrl} alt={id} />
      </Button>
    </li>
  )
}
export default EachListItem
