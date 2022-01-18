module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // presets: ['@babel/preset-env', 
    //            'babel-preset-expo', 
    //             { targets: { node: 'current' } }
    //           ],
  };
};
 