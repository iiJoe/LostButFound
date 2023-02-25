import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { db } from '../functions/firestore';
import { collection, getDocs } from "firebase/firestore";

interface CategoryData {
  id: string;
  name: string;
}

interface ItemData {
  [key: string]: any;
}

const Whatever = () => {
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [itemData, setItemData] = useState<ItemData[]>([]);

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
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    setItemData(data);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {categoryData.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            style={{ marginRight: 10, marginBottom: 10, padding: '10px 20px' }}
          >
            {category.id}
          </button>
        ))}
      </div>
      {itemData.length > 0 ? (
        <div>
          {itemData.map((item) => (
            <div key={item.id}>
              {Object.keys(item).map((key) => (
                key === 'ImageUrl' ? (
                  <img key={key} src={item[key]} alt={item['Name']} />
                ) : (
                  <p key={key}>{`${key}: ${item[key]}`}</p>
                )
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Select a category to view items.</p>
      )}
    </div>
  );
};

export { Whatever };
