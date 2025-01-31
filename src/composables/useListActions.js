export default function useListActions(list) {

    const addItem = (item) => {
        list.value.push(item);
    };

    const deleteItem = (id) => {
        const index = list.value.findIndex((item) => item.id === id);

        if (index > -1) {
            list.value.splice(index, 1);
        }
    };

    return {addItem, deleteItem};
}
