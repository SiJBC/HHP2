const router = require("express").Router();
const ailmentController = require("../../controllers/ailmentController")

router.route("/headache")
    .get(ailmentController.findHeadache)

router.route("/headache/treatment1")
    .get(ailmentController.findHeadacheTreatment1)

router.route("/headache/pharm")
    .get(ailmentController.findHeadachePharm)

router.route("/headache/nopharm")
    .get(ailmentController.findHeadacheNoPharm)

router.route("/backpain")
    .get(ailmentController.findBackpain)

router.route("/backpain/pharm")
    .get(ailmentController.findBackpainPharm)

router.route("/backpain/nopharm")
    .get(ailmentController.findBackpainNoPharm)

router.route("/alzheimers")
    .get(ailmentController.findAlzheimers)

router.route("/alzheimers/pharm")
    .get(ailmentController.findAlzheimersPharm)

router.route("/alzheimers/nopharm")
    .get(ailmentController.findAlzheimersNoPharm)

router.route("/diabetes")
    .get(ailmentController.findDiabetes)

router.route("/diabetes/pharm")
    .get(ailmentController.findDiabetesPharm)

router.route("/diabetes/nopharm")
    .get(ailmentController.findDiabetesNoPharm)

router.route("/jointpains")
    .get(ailmentController.findJointPains)

router.route("/jointpains/pharm")
    .get(ailmentController.findJointPainsPharm)

router.route("/jointpains/nopharm")
    .get(ailmentController.findJointPainsNoPharm)


router.route("/")
    .get(ailmentController.findAll)

router.route("/")
    .post(ailmentController.create)

router.route("/:id")
    .delete(ailmentController.remove)

router.route("/:id")
    .put(ailmentController.UpdateById)

router.route("/:email")
    .get(ailmentController.findByEmail)


module.exports = router
