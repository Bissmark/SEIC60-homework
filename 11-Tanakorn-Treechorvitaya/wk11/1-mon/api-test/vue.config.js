const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  devServer: {
  proxy: 'https://emojihub.yurace.pro/api/random',
  }
}

// if(builder.Environment.IsDevelopment())
// {
//     builder.Services.AddCors(options =>
//     {
        
//         options.AddDefaultPolicy(
//             policy =>
//             {
//                 policy.AllowAnyOrigin()
//                     .AllowAnyHeader()
//                     .AllowAnyMethod();
//             });
//     });
// }

// var app = builder.Build();
// app.UseHttpsRedirection();
// app.UseStaticFiles();
// app.UseRouting();

// app.UseCors();