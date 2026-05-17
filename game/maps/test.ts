const {MapInterface, Map} = require("./map.ts");

const mapDataFormat = [
  { // map row
    id: 45,
    //...
    tiles: [
      { // tile
	id: 88,
	//...
	rows: [
	  { // tile row
	    tileId: 89,
	    //...
	    columns: [
	      { // tile column
		tileRowId: 44,
		color: "red"
		//...
	      },
	      {},
	      {}
	    ]
	  },
	  {},
	  {}
	]
      },
      {},
      {}
    ]
  },
  {},
  {}
]

const map1: MapInterface = new Map();
