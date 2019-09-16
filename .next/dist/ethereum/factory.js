'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// the 1st argument: ABI
// the 2nd argument: the contract address which is given when you deploy the contract to the Rinkeby network
// getting an instance of web3
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x953Ad951cF8044Fcf4a967c83ac255c8A28Dd905');
// creating a campaignFactory instance of the contract
// we will make use of this to create a new campaign instance 
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU8sQUFBVTs7OztBQUdqQixBQUFPLEFBQXFCOzs7Ozs7QUFDNUI7QUFDQTtBQU5BO0FBT0EsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUM1QixLQUFBLEFBQUssTUFBTSwwQkFESSxBQUNmLEFBQTJCLFlBRDdCLEFBQWlCLEFBRWYsQUFHRjtBQVZBO0FBQ0E7a0JBU0EsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9raGlnYTYxOS9TaXRlcy91ZGVteS9raWNrc3RhcnQifQ==