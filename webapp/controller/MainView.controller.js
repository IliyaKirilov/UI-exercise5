sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("kpmg.home.Exercise5.controller.MainView", {
		onInit: function () {

		},
		oDataCall: function (oEvent) {
			// call oData service's function based on which button is clicked.
			debugger;
			var myModel = this.getView().getModel("myModel");

			// CREATE******************
			if ('Create' == oEvent.oSource.mProperties.text) {
				var obj = {};
				obj.Id = this.getView().byId("uniqueid").getValue();
				obj.Name = this.getView().byId("nameid").getValue();
				obj.Email = this.getView().byId("emailid").getValue();
				obj.Mobile = this.getView().byId("mobid").getValue();
				myModel.create('/userdataSet', obj, {
					success: function (oData, oResponse) {
						debugger;
						alert('Record Created Successfully...');
					},
					error: function (err, oResponse) {
						debugger;
						alert('Error while creating record - '
							.concat(err.response.statusText));
					}
				});
			}
			// READ******************
			else if ('Read' == oEvent.oSource.mProperties.text) {
				var readurl = "/userdataSet";
				myModel.read(readurl, {
					success: function (oData, oResponse) {
						debugger;
						// var userdata = new sap.ui.model.json.JSONModel({
						// 	"Result": oData.results
						// });
						// var tab = this.getView().byId("userdatatable");
						// tab.setModel(userdata);
						// var i = 0;
						// tab.bindAggregation("items", {
						// 	path: "/Result",
						// 	template: new sap.m.ColumnListItem({
						// 		cells: [new sap.ui.commons.TextView({
						// 			text: "{id}",
						// 			design: "H5",
						// 			semanticColor: "Default"
						// 		}), new sap.ui.commons.TextView({
						// 			text: "{name}",
						// 			design: "H5",
						// 			semanticColor: "Positive"
						// 		}), new sap.ui.commons.TextView({
						// 			text: "{email}",
						// 			design: "H5",
						// 			semanticColor: "Positive"
						// 		}), new sap.ui.commons.TextView({
						// 			text: "{mobile}",
						// 			design: "H5",
						// 			semanticColor: "Positive"
						// 		}), ]
						// 	})
						// });
					},
					error: function (err) {
						debugger;
					}
				});
			}
			// UPDATE******************
			if ('Update' == oEvent.oSource.mProperties.text) {
				var obj1 = {};
				obj1.Id = this.getView().byId("uniqueid").getValue();
				obj1.Name = this.getView().byId("nameid").getValue();
				obj1.Email = this.getView().byId("emailid").getValue();
				obj1.Mobile = this.getView().byId("mobid").getValue();

				var updateurl = "/userdataSet(Id='" + this.getView().byId("uniqueid").getValue() + "')";

				myModel.update(updateurl, obj1, {
					success: function (oData, oResponse) {
						debugger;
						alert('Record Updated Successfully...');
					},
					error: function (err, oResponse) {
						debugger;
						alert('Error while updating record - '
							.concat(err.response.statusText));
					}
				});
			}
			// DELETE******************
			if ('Delete' == oEvent.oSource.mProperties.text) {
				var delurl = "/userdataSet(Id='" + this.getView().byId("uniqueid").getValue() + "')";
				myModel.remove(delurl, {
					success: function (oData, oResponse) {
						debugger;
						alert('Record Removed Successfully...');
					},
					error: function (err, oResponse) {
						debugger;
						alert('Error while removing record - '
							.concat(err.response.statusText));
					}
				});
			}
		}

	});
});