
import Item from './Item/Item';
import { StyledItemList } from './ItemListStyles';

export const ItemCat = ({ displayItems }) => {
	return <StyledItemList>{displayItems.map((item) => <Item item={item} key={item.id} />)}</StyledItemList>;
};

