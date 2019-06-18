const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white",
					id: 1
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
					id: 2
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white",
					id: 3
				}
			]
		},
		actions: {
			changeColor: (newIndex, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((item, index) => {
					if (index === newIndex) item.background = color;
					return item;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			resetColor: color => {
				const store = getStore();

				const newDemo = store.demo.map(item => {
					item.background = "white";
					return item;
				});
				setStore({ demo: newDemo });
			},

			resetColorFirts: (newIndex, color) => {
				const store = getStore();
				const demo = store.demo.map((item, index) => {
					if (index === newIndex) item.background = color;
					return item;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
