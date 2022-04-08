
const path=require("path");
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"),
        filename:"bundle.js"
    },
    mode:"production",
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader","css-loader"] },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i, use:["file-loader"]}
        //     type: 'asset/resource',
        //     loader: 'file-loader',
        //   }
    ],

       



      },

  
};