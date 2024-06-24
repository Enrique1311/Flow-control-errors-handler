const d = document;
const $sendBtn = d.querySelector(".send-btn");

$sendBtn.addEventListener("click", () => {
	let res, msg;

	try {
		prevRes = parseInt(d.querySelector(".calification").value);
		if (isNaN(prevRes)) {
			throw "Invalid";
		}
		res = verifyScore(10, 8, prevRes);
		msg = getMessage(prevRes);
	} catch (err) {
		res = "It must be a number!";
		msg = "Error";
	}

	openModal(res, msg);
});

const getMessage = (prev) => {
	switch (prev) {
		case 1:
			res = "You haven´t studied!";
			break;
		case 2:
			res = "You haven´t studied!";
			break;
		case 3:
			res = "You haven´t studied!";
			break;
		case 4:
			res = "You have to study!";
			break;
		case 5:
			res = "You have to study!";
			break;
		case 6:
			res = "You have to study!";
			break;
		case 7:
			res = "You have studied!";
			break;
		case 8:
			res = "You have studied!";
			break;
		case 9:
			res = "You have studied!";
			break;
		case 10:
			res = "You have studied!";
			break;
		default:
			res = null;
	}
	return res;
};

const verifyScore = (cal1, cal2, prevRes) => {
	let score = (cal1 + cal2 + prevRes) / 3;

	if (score >= 7) {
		return `<h3 class="green">Passed</h3>`;
	}
	return `<h3 class="red">Not Passed</h3>`;
};

const openModal = (res, msg) => {
	d.querySelector(".modal-result").innerHTML = res;
	d.querySelector(".modal-message").innerHTML = `Your test: ${msg}`;

	const $modalContainer = d.querySelector(".modal-container");

	$modalContainer.classList.add("visible");
};
