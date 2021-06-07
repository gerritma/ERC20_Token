pragma solidity ^0.5.0;
import "../node_modules/@openzeppelin/contracts/math/SafeMath.sol";
contract RugPull {

	using SafeMath for uint256;

	string public name = "Rug Pull";
	string public symbol = "RGPL";
	uint public totalSupply = 10**24; // 1 million tokens
	uint public decimals = 18;

	event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );



	mapping(address => uint) public balances;
	mapping (address => mapping (address => uint256)) public allowances;

	constructor() public {
		balances[msg.sender] = totalSupply;
	}

	function balanceOf(address _account) public view returns (uint256) {
        return balances[_account];
    }


   	function transfer(address _recipient, uint256 _amount) public returns (bool) {
	   	require(balanceOf(msg.sender) >= _amount, 'balance too low');

	   	
	   	balances[msg.sender] = balances[msg.sender].sub(_amount);
	   	balances[_recipient] = balances[_recipient].add(_amount); 
        
        emit Transfer(msg.sender, _recipient, _amount);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool) {
        allowances[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        require(_value <= balanceOf(_fxrom), 'balance to low';
        require(_value <= allowances[_from][msg.sender], 'allowance too low');
        balances[_from] -= _value;
        balances[_to] += _value;
        allowances[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}

