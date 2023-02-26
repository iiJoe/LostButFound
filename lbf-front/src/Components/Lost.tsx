import { useState, useEffect } from 'react';
import 'firebase/firestore';
import { db } from '../functions/firestore';
import { collection, getDocs } from "firebase/firestore";
import "../css/lost.css"

interface CategoryData {
  id: string;
  name: string;
}

interface ItemData {
  id: string,
  handle: string,
  description: string,
  ImageUrl: string
}

const Lost = () => {
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [itemData, setItemData] = useState<ItemData[]>([]);
  const [activeButton, setActiveButton] = useState("")

  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "Categories"));
      const data: CategoryData[] = [];

      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          name: doc.data().name,
        });
      });

      setCategoryData(data);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (categoryId: string) => {
    const querySnapshot = await getDocs(collection(db, `Categories/${categoryId}/Items`));
    const data: ItemData[] = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data() as ItemData)
    });

    setItemData(data);
    setActiveButton(categoryId);
  };

  return (
    <div className="lost-container">
      <div className="lost-category">
        {categoryData.map((category) => (
          <div
            className={activeButton === category.id ? "category-button active" : "category-button"}
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}>
            {category.id}
          </div>
        ))}
      </div>
      {itemData.length > 0 ? (
        <div className="item-container">
          {itemData.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.ImageUrl} alt="" />
              <div>{item.handle}</div>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="item-preview">
          <h1>Select a category to view items.</h1>
          <img src="/images/lost.jpg" alt="lost.jpg"/>
        </div>
      )}

    </div>
  );
};

export { Lost };
