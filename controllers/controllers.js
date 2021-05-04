exports.selectProducts = async (category) => {
  try {
    const products = await Product.findAll({
      where: {
        CategoryId: category,
      },
      attributes: ['id', 'name', 'style', 'price', 'valoration'],
      include: {
        model: Company,
        attributes: ['name', 'CIF', 'address'],
        required: true,
      },
      raw: true,
    });
    return products;
  } catch (error) {
    console.log('Error en el select de la tabla Users', error);
  }
};

exports.selectProductCompany = async (id) => {
  try {
    const product = await Product.findAll({
      attributes: ['name', 'style', 'photo', 'price', 'valoration'],
      where: {
        id,
      },
      include: {
        model: Company,
        attributes: ['name', 'CIF', 'address'],
        required: true,
      },
    });
    return product;
  } catch (error) {
    console.log(error);
  }
};
