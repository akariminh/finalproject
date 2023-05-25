// export const apiGetPublicProvinces = () => new Promise(async (resolve, reject) => {
//     try {
//         const response = await axiosDefault({
//             method: 'get',
//             url: 'https://vapi.vnappmob.com/api/province/'
//         })
//         resolve(response)
//     } catch (error) {
//         reject(error)
//     }
// })
// export const apiGetPublicDistrict = (provinceId) => new Promise(async (resolve, reject) => {
//     try {
//         const response = await axiosDefault({
//             method: 'get',
//             url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`
//         })
//         resolve(response)
//     } catch (error) {
//         reject(error)
//     }
// })
// console.log(apiGetPublicProvinces)

// Cách 2:
// let getAPIProvinces = 'https://vapi.vnappmob.com/api/province/';
// // const getAPIDistrict = `https://vapi.vnappmob.com/api/province/district/${provinceId}`

// fetch(getAPIProvinces)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (provinces) {
//         let htmls = provinces.map((province) => {
//             const { provinceID, province_name } = province;
//             return `'<option value="" id="${provinceID}">${province_name}</option>'`
//         });
//         let html = htmls.join('');
//         document.querySelector('#importProvince').innerHTML = html;
//     })

const host = "https://provinces.open-api.vn/api/";
var callAPI = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data, "province");
        });
}
callAPI('https://provinces.open-api.vn/api/?depth=1');
var callApiDistrict = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data.districts, "district");
        });
}
var callApiWard = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data.wards, "ward");
        });
}

var renderData = (array, select) => {
    row = `'<option disable value="">Choose ${select}:</option>'`;

    array.forEach(element => {
        row += `<option value="${element.code}">${element.name}</option>`
    });
    document.querySelector("#" + select).innerHTML = row
}

$("#province").change(() => {
    document.querySelector('#district').removeAttribute('disabled');
    callApiDistrict(host + "p/" + $("#province").val() + "?depth=2");
    printResult();
});
$("#district").change(() => {
    document.querySelector('#ward').removeAttribute('disabled');
    callApiWard(host + "d/" + $("#district").val() + "?depth=2");
    printResult();
});
$("#ward").change(() => {
    printResult();
})
