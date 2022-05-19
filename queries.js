const getAllItems = () => `
select * from items
ORDER BY id ASC
`;

const getItemsFromWarehouse = (warehouse) => `
select * from items
where 
ORDER BY id ASC
`;

module.exports = { getAllItems };
