(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ast"] = factory();
	else
		root["ast"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdateast"];
/******/ 	this["webpackHotUpdateast"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "04fa0076f3bae48ae014";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/index.ts")(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Console, Cntnr, Envmnt, Op, NULL, UNDEFINED, Reference, ConsoleLogNode, NumberNode, StringNode, BooleanNode, NullNode, UndefinedNode, DeclareVarNode, DeclareVarListNode, CreateIdVarNode, AsignNode, SumNode, SubNode, MulNode, DivNode, ModNode, ExpNode, EqNode, DifNode, HigherNode, MinorNode, HigherEqNode, MinorEqNode, OrNode, AndNode, NotNode, ReAsignAddNode, ReAsignSubNode, ReAsignMulNode, ReAsignDivNode, ReAsignModNode, ReAddNode, ReSubNode, CreateArrayNode, CreateArrVarNode, ReturnObj, CreateObjVarNode, CreateObjFunNode, SentenceTernaryNode, BreakNode, ContinueNode, IfNode, WhileNode, DoWhileNode, ExecuteAST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteAST", function() { return ExecuteAST; });
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Reference */ "./src/utils/Reference.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _utils_Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"]; });

/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NULL", function() { return _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["NULL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNDEFINED", function() { return _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]; });

/* harmony import */ var _utils_Envmnt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Envmnt */ "./src/utils/Envmnt.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Envmnt", function() { return _utils_Envmnt__WEBPACK_IMPORTED_MODULE_2__["Envmnt"]; });

/* harmony import */ var _utils_Cntnr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/Cntnr */ "./src/utils/Cntnr.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cntnr", function() { return _utils_Cntnr__WEBPACK_IMPORTED_MODULE_3__["Cntnr"]; });

/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/Op */ "./src/utils/Op.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Op", function() { return _utils_Op__WEBPACK_IMPORTED_MODULE_4__["Op"]; });

/* harmony import */ var _utils_Console__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/Console */ "./src/utils/Console.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return _utils_Console__WEBPACK_IMPORTED_MODULE_5__["Console"]; });

/* harmony import */ var _nodes_ConsoleLogNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nodes/ConsoleLogNode */ "./src/nodes/ConsoleLogNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogNode", function() { return _nodes_ConsoleLogNode__WEBPACK_IMPORTED_MODULE_6__["ConsoleLogNode"]; });

/* harmony import */ var _nodes_NumberNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nodes/NumberNode */ "./src/nodes/NumberNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberNode", function() { return _nodes_NumberNode__WEBPACK_IMPORTED_MODULE_7__["NumberNode"]; });

/* harmony import */ var _nodes_StringNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nodes/StringNode */ "./src/nodes/StringNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringNode", function() { return _nodes_StringNode__WEBPACK_IMPORTED_MODULE_8__["StringNode"]; });

/* harmony import */ var _nodes_BooleanNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nodes/BooleanNode */ "./src/nodes/BooleanNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanNode", function() { return _nodes_BooleanNode__WEBPACK_IMPORTED_MODULE_9__["BooleanNode"]; });

/* harmony import */ var _nodes_NullNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nodes/NullNode */ "./src/nodes/NullNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullNode", function() { return _nodes_NullNode__WEBPACK_IMPORTED_MODULE_10__["NullNode"]; });

/* harmony import */ var _nodes_UndefinedNode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes/UndefinedNode */ "./src/nodes/UndefinedNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UndefinedNode", function() { return _nodes_UndefinedNode__WEBPACK_IMPORTED_MODULE_11__["UndefinedNode"]; });

/* harmony import */ var _nodes_DeclareVarNode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nodes/DeclareVarNode */ "./src/nodes/DeclareVarNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclareVarNode", function() { return _nodes_DeclareVarNode__WEBPACK_IMPORTED_MODULE_12__["DeclareVarNode"]; });

/* harmony import */ var _nodes_DeclareVarListNode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes/DeclareVarListNode */ "./src/nodes/DeclareVarListNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclareVarListNode", function() { return _nodes_DeclareVarListNode__WEBPACK_IMPORTED_MODULE_13__["DeclareVarListNode"]; });

/* harmony import */ var _nodes_CreateIdVarNode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nodes/CreateIdVarNode */ "./src/nodes/CreateIdVarNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateIdVarNode", function() { return _nodes_CreateIdVarNode__WEBPACK_IMPORTED_MODULE_14__["CreateIdVarNode"]; });

/* harmony import */ var _nodes_AsignNode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nodes/AsignNode */ "./src/nodes/AsignNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsignNode", function() { return _nodes_AsignNode__WEBPACK_IMPORTED_MODULE_15__["AsignNode"]; });

/* harmony import */ var _nodes_SumNode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nodes/SumNode */ "./src/nodes/SumNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SumNode", function() { return _nodes_SumNode__WEBPACK_IMPORTED_MODULE_16__["SumNode"]; });

/* harmony import */ var _nodes_SubNode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nodes/SubNode */ "./src/nodes/SubNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubNode", function() { return _nodes_SubNode__WEBPACK_IMPORTED_MODULE_17__["SubNode"]; });

/* harmony import */ var _nodes_MulNode__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nodes/MulNode */ "./src/nodes/MulNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MulNode", function() { return _nodes_MulNode__WEBPACK_IMPORTED_MODULE_18__["MulNode"]; });

/* harmony import */ var _nodes_DivNode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nodes/DivNode */ "./src/nodes/DivNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivNode", function() { return _nodes_DivNode__WEBPACK_IMPORTED_MODULE_19__["DivNode"]; });

/* harmony import */ var _nodes_ModNode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nodes/ModNode */ "./src/nodes/ModNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModNode", function() { return _nodes_ModNode__WEBPACK_IMPORTED_MODULE_20__["ModNode"]; });

/* harmony import */ var _nodes_ExpNode__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nodes/ExpNode */ "./src/nodes/ExpNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpNode", function() { return _nodes_ExpNode__WEBPACK_IMPORTED_MODULE_21__["ExpNode"]; });

/* harmony import */ var _nodes_EqNode__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nodes/EqNode */ "./src/nodes/EqNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EqNode", function() { return _nodes_EqNode__WEBPACK_IMPORTED_MODULE_22__["EqNode"]; });

/* harmony import */ var _nodes_DifNode__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./nodes/DifNode */ "./src/nodes/DifNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DifNode", function() { return _nodes_DifNode__WEBPACK_IMPORTED_MODULE_23__["DifNode"]; });

/* harmony import */ var _nodes_HigherNode__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./nodes/HigherNode */ "./src/nodes/HigherNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HigherNode", function() { return _nodes_HigherNode__WEBPACK_IMPORTED_MODULE_24__["HigherNode"]; });

/* harmony import */ var _nodes_MinorNode__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./nodes/MinorNode */ "./src/nodes/MinorNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinorNode", function() { return _nodes_MinorNode__WEBPACK_IMPORTED_MODULE_25__["MinorNode"]; });

/* harmony import */ var _nodes_HigherEqNode__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./nodes/HigherEqNode */ "./src/nodes/HigherEqNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HigherEqNode", function() { return _nodes_HigherEqNode__WEBPACK_IMPORTED_MODULE_26__["HigherEqNode"]; });

/* harmony import */ var _nodes_MinorEqNode__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./nodes/MinorEqNode */ "./src/nodes/MinorEqNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinorEqNode", function() { return _nodes_MinorEqNode__WEBPACK_IMPORTED_MODULE_27__["MinorEqNode"]; });

/* harmony import */ var _nodes_OrNode__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./nodes/OrNode */ "./src/nodes/OrNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrNode", function() { return _nodes_OrNode__WEBPACK_IMPORTED_MODULE_28__["OrNode"]; });

/* harmony import */ var _nodes_AndNode__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./nodes/AndNode */ "./src/nodes/AndNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AndNode", function() { return _nodes_AndNode__WEBPACK_IMPORTED_MODULE_29__["AndNode"]; });

/* harmony import */ var _nodes_NotNode__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./nodes/NotNode */ "./src/nodes/NotNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotNode", function() { return _nodes_NotNode__WEBPACK_IMPORTED_MODULE_30__["NotNode"]; });

/* harmony import */ var _nodes_ReAsignAddNode__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./nodes/ReAsignAddNode */ "./src/nodes/ReAsignAddNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignAddNode", function() { return _nodes_ReAsignAddNode__WEBPACK_IMPORTED_MODULE_31__["ReAsignAddNode"]; });

/* harmony import */ var _nodes_ReAsignSubNode__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./nodes/ReAsignSubNode */ "./src/nodes/ReAsignSubNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignSubNode", function() { return _nodes_ReAsignSubNode__WEBPACK_IMPORTED_MODULE_32__["ReAsignSubNode"]; });

/* harmony import */ var _nodes_ReAsignMulNode__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./nodes/ReAsignMulNode */ "./src/nodes/ReAsignMulNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignMulNode", function() { return _nodes_ReAsignMulNode__WEBPACK_IMPORTED_MODULE_33__["ReAsignMulNode"]; });

/* harmony import */ var _nodes_ReAsignDivNode__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./nodes/ReAsignDivNode */ "./src/nodes/ReAsignDivNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignDivNode", function() { return _nodes_ReAsignDivNode__WEBPACK_IMPORTED_MODULE_34__["ReAsignDivNode"]; });

/* harmony import */ var _nodes_ReAsignModNode__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./nodes/ReAsignModNode */ "./src/nodes/ReAsignModNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignModNode", function() { return _nodes_ReAsignModNode__WEBPACK_IMPORTED_MODULE_35__["ReAsignModNode"]; });

/* harmony import */ var _nodes_ReAddNode__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./nodes/ReAddNode */ "./src/nodes/ReAddNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAddNode", function() { return _nodes_ReAddNode__WEBPACK_IMPORTED_MODULE_36__["ReAddNode"]; });

/* harmony import */ var _nodes_ReSubNode__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./nodes/ReSubNode */ "./src/nodes/ReSubNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReSubNode", function() { return _nodes_ReSubNode__WEBPACK_IMPORTED_MODULE_37__["ReSubNode"]; });

/* harmony import */ var _nodes_CreateArrayNode__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./nodes/CreateArrayNode */ "./src/nodes/CreateArrayNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateArrayNode", function() { return _nodes_CreateArrayNode__WEBPACK_IMPORTED_MODULE_38__["CreateArrayNode"]; });

/* harmony import */ var _nodes_CreateArrVarNode__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./nodes/CreateArrVarNode */ "./src/nodes/CreateArrVarNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateArrVarNode", function() { return _nodes_CreateArrVarNode__WEBPACK_IMPORTED_MODULE_39__["CreateArrVarNode"]; });

/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReturnObj", function() { return _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_40__["ReturnObj"]; });

/* harmony import */ var _nodes_CreateObjVarNode__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./nodes/CreateObjVarNode */ "./src/nodes/CreateObjVarNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateObjVarNode", function() { return _nodes_CreateObjVarNode__WEBPACK_IMPORTED_MODULE_41__["CreateObjVarNode"]; });

/* harmony import */ var _nodes_CreateObjFunNode__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nodes/CreateObjFunNode */ "./src/nodes/CreateObjFunNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateObjFunNode", function() { return _nodes_CreateObjFunNode__WEBPACK_IMPORTED_MODULE_42__["CreateObjFunNode"]; });

/* harmony import */ var _nodes_SentenceTernaryNode__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./nodes/SentenceTernaryNode */ "./src/nodes/SentenceTernaryNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentenceTernaryNode", function() { return _nodes_SentenceTernaryNode__WEBPACK_IMPORTED_MODULE_43__["SentenceTernaryNode"]; });

/* harmony import */ var _nodes_BreakNode__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./nodes/BreakNode */ "./src/nodes/BreakNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakNode", function() { return _nodes_BreakNode__WEBPACK_IMPORTED_MODULE_44__["BreakNode"]; });

/* harmony import */ var _nodes_ContinueNode__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./nodes/ContinueNode */ "./src/nodes/ContinueNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContinueNode", function() { return _nodes_ContinueNode__WEBPACK_IMPORTED_MODULE_45__["ContinueNode"]; });

/* harmony import */ var _nodes_IfNode__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./nodes/IfNode */ "./src/nodes/IfNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfNode", function() { return _nodes_IfNode__WEBPACK_IMPORTED_MODULE_46__["IfNode"]; });

/* harmony import */ var _nodes_WhileNode__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./nodes/WhileNode */ "./src/nodes/WhileNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhileNode", function() { return _nodes_WhileNode__WEBPACK_IMPORTED_MODULE_47__["WhileNode"]; });

/* harmony import */ var _nodes_DoWhileNode__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./nodes/DoWhileNode */ "./src/nodes/DoWhileNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoWhileNode", function() { return _nodes_DoWhileNode__WEBPACK_IMPORTED_MODULE_48__["DoWhileNode"]; });



















































function ExecuteAST(sentences) {
    _utils_Console__WEBPACK_IMPORTED_MODULE_5__["Console"].log = '';
    const env = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_2__["Envmnt"](null, sentences);
    env.GO_ALL();
}
if (module && module.hot)
    module.hot.accept();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/nodes/AndNode.ts":
/*!******************************!*\
  !*** ./src/nodes/AndNode.ts ***!
  \******************************/
/*! exports provided: AndNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndNode", function() { return AndNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LogicalOperationsFunctions */ "./src/utils/LogicalOperationsFunctions.ts");


class AndNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["And"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/AsignNode.ts":
/*!********************************!*\
  !*** ./src/nodes/AsignNode.ts ***!
  \********************************/
/*! exports provided: AsignNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignNode", function() { return AsignNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");



class AsignNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lfVal = this.lf.Exe(env);
        const rtVal = this.rt.Exe(env);
        if (!(lfVal instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asignar a ${lfVal.typo}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lfVal.PutValueOnReference(rtVal);
        return null;
    }
}


/***/ }),

/***/ "./src/nodes/BooleanNode.ts":
/*!**********************************!*\
  !*** ./src/nodes/BooleanNode.ts ***!
  \**********************************/
/*! exports provided: BooleanNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanNode", function() { return BooleanNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class BooleanNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(val) {
        super();
        this.val = val;
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["BOOLEAN"](this.val);
    }
}


/***/ }),

/***/ "./src/nodes/BreakNode.ts":
/*!********************************!*\
  !*** ./src/nodes/BreakNode.ts ***!
  \********************************/
/*! exports provided: BreakNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakNode", function() { return BreakNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _BreakObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakObj */ "./src/nodes/BreakObj.ts");


class BreakNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    GO(env) {
        return new _BreakObj__WEBPACK_IMPORTED_MODULE_1__["BreakObj"]();
    }
}


/***/ }),

/***/ "./src/nodes/BreakObj.ts":
/*!*******************************!*\
  !*** ./src/nodes/BreakObj.ts ***!
  \*******************************/
/*! exports provided: BreakObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakObj", function() { return BreakObj; });
/* harmony import */ var _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Cntnr */ "./src/utils/Cntnr.ts");

class BreakObj extends _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "./src/nodes/ConsoleLogNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ConsoleLogNode.ts ***!
  \*************************************/
/*! exports provided: ConsoleLogNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogNode", function() { return ConsoleLogNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Console */ "./src/utils/Console.ts");



class ConsoleLogNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(expression) {
        super();
        this.expression = expression;
    }
    GO(env) {
        let val = this.expression.Exe(env);
        if (val instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            val = val.getValue();
        }
        _utils_Console__WEBPACK_IMPORTED_MODULE_2__["Console"].log += `>_ ${val} \n`;
        console.log(`>_ ${val}`);
        return null;
    }
    ;
}


/***/ }),

/***/ "./src/nodes/ContinueNode.ts":
/*!***********************************!*\
  !*** ./src/nodes/ContinueNode.ts ***!
  \***********************************/
/*! exports provided: ContinueNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinueNode", function() { return ContinueNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _ContinueObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContinueObj */ "./src/nodes/ContinueObj.ts");


class ContinueNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    GO(env) {
        return new _ContinueObj__WEBPACK_IMPORTED_MODULE_1__["ContinueObj"]();
    }
}


/***/ }),

/***/ "./src/nodes/ContinueObj.ts":
/*!**********************************!*\
  !*** ./src/nodes/ContinueObj.ts ***!
  \**********************************/
/*! exports provided: ContinueObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinueObj", function() { return ContinueObj; });
/* harmony import */ var _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Cntnr */ "./src/utils/Cntnr.ts");

class ContinueObj extends _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "./src/nodes/CreateArrVarNode.ts":
/*!***************************************!*\
  !*** ./src/nodes/CreateArrVarNode.ts ***!
  \***************************************/
/*! exports provided: CreateArrVarNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArrVarNode", function() { return CreateArrVarNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");




class CreateArrVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(id, index) {
        super();
        this.id = id;
        this.index = index;
    }
    GO(env) {
        let idRef = this.id.Exe(env);
        if (!(idRef instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`Llamada a Arreglo ${idRef} no definido.`);
        }
        let index = this.index.Exe(env);
        if (index instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            index = index.getValue();
        }
        if (!(index instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["NUMBER"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"]("El indice para accesar debe ser de tipo NUMBER");
        }
        let ref = idRef.getValue();
        if (!(ref instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["ARRAY"])) {
            return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["UNDEFINED"]();
        }
        return ref.getValue(index.getValue());
    }
}


/***/ }),

/***/ "./src/nodes/CreateArrayNode.ts":
/*!**************************************!*\
  !*** ./src/nodes/CreateArrayNode.ts ***!
  \**************************************/
/*! exports provided: CreateArrayNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArrayNode", function() { return CreateArrayNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



class CreateArrayNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(vals) {
        super();
        this.vals = vals;
    }
    GO(env) {
        let real = new Array();
        for (let op of this.vals) {
            let reference = new _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]();
            reference.PutValueOnReference(op.Exe(env));
            real.push(reference);
        }
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["ARRAY"](real);
    }
}


/***/ }),

/***/ "./src/nodes/CreateIdVarNode.ts":
/*!**************************************!*\
  !*** ./src/nodes/CreateIdVarNode.ts ***!
  \**************************************/
/*! exports provided: CreateIdVarNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIdVarNode", function() { return CreateIdVarNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");


class CreateIdVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(id) {
        super();
        this.id = id;
    }
    GO(env) {
        return Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__["FindVar"])(env, this.id);
    }
}


/***/ }),

/***/ "./src/nodes/CreateObjFunNode.ts":
/*!***************************************!*\
  !*** ./src/nodes/CreateObjFunNode.ts ***!
  \***************************************/
/*! exports provided: CreateObjFunNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObjFunNode", function() { return CreateObjFunNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions/FunctionRepresent */ "./src/utils/functions/FunctionRepresent.ts");
/* harmony import */ var _ReturnObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReturnObj */ "./src/nodes/ReturnObj.ts");




class CreateObjFunNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(object, funId, args) {
        super();
        this.object = object;
        this.funId = funId;
        this.args = args;
    }
    GO(env) {
        let refe = this.object.Exe(env);
        if (refe instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            refe = refe.getValue();
        }
        let fun = refe.GetProperty(this.funId);
        if (!(fun instanceof _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_2__["FunctionRepresent"])) {
            return null;
        }
        const references = new Array();
        for (let arg of this.args) {
            let argValue = arg.Exe(env);
            if (argValue instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
                argValue = argValue.getValue();
            }
            references.push(argValue);
        }
        let ans = fun.EXE(env, references);
        if (ans instanceof _ReturnObj__WEBPACK_IMPORTED_MODULE_3__["ReturnObj"]) {
            return ans.getValue();
        }
        return null;
    }
}


/***/ }),

/***/ "./src/nodes/CreateObjVarNode.ts":
/*!***************************************!*\
  !*** ./src/nodes/CreateObjVarNode.ts ***!
  \***************************************/
/*! exports provided: CreateObjVarNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObjVarNode", function() { return CreateObjVarNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functions/FunctionRepresent */ "./src/utils/functions/FunctionRepresent.ts");
/* harmony import */ var _ReturnObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReturnObj */ "./src/nodes/ReturnObj.ts");





class CreateObjVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(id, attr) {
        super();
        this.id = id;
        this.attr = attr;
    }
    GO(env) {
        let id = this.id.Exe(env);
        if (!(id instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"]("Llamada a Objeto no definido");
        }
        let ref = id.getValue();
        let e = ref.GetProperty(this.attr);
        if (e instanceof _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_3__["FunctionRepresent"]) {
            let ans = e.EXE(env, new Array());
            if (ans instanceof _ReturnObj__WEBPACK_IMPORTED_MODULE_4__["ReturnObj"]) {
                return ans.getValue();
            }
        }
        return ref.GetProperty(this.attr);
    }
}


/***/ }),

/***/ "./src/nodes/DeclareVarListNode.ts":
/*!*****************************************!*\
  !*** ./src/nodes/DeclareVarListNode.ts ***!
  \*****************************************/
/*! exports provided: DeclareVarListNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclareVarListNode", function() { return DeclareVarListNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class DeclareVarListNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(tipoNombre, declarationOps, value, isConst = false) {
        super();
        this.tipoNombre = tipoNombre;
        this.declarationOps = declarationOps;
        this.value = value || null;
        this.isConst = isConst;
    }
    GO(env) {
        for (let op of this.declarationOps) {
            try {
                if (this.value !== null) {
                    op.AddValue(this.value.Exe(env), this.isConst, this.tipoNombre);
                }
                else {
                    op.AddValue(new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"](), this.isConst, this.tipoNombre);
                }
                op.Exe(env);
            }
            catch (e) {
                console.log(e.message);
            }
        }
        console.log(env);
        return null;
    }
}


/***/ }),

/***/ "./src/nodes/DeclareVarNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/DeclareVarNode.ts ***!
  \*************************************/
/*! exports provided: DeclareVarNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclareVarNode", function() { return DeclareVarNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");



class DeclareVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(name) {
        super();
        this.value = new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]();
        this.name = name;
    }
    GO(env) {
        this.AddVarOnDeclare(env, this.name);
        return null;
    }
    AddValue(value = new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"](), isConst = false, tipoNombre = 'ANY') {
        this.value = value;
        this.isConst = isConst;
        if (tipoNombre === '') {
            tipoNombre = 'ANY';
        }
        this.tipoNombre = tipoNombre.toUpperCase();
    }
    AddVarOnDeclare(env, identifier) {
        const value = this.value;
        const reference = new _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"](this.tipoNombre, this.isConst);
        reference.PutValueOnReference(value);
        env.Declare(identifier, reference);
    }
}


/***/ }),

/***/ "./src/nodes/DifNode.ts":
/*!******************************!*\
  !*** ./src/nodes/DifNode.ts ***!
  \******************************/
/*! exports provided: DifNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifNode", function() { return DifNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class DifNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Diferente"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/DivNode.ts":
/*!******************************!*\
  !*** ./src/nodes/DivNode.ts ***!
  \******************************/
/*! exports provided: DivNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivNode", function() { return DivNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class DivNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Division"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/DoWhileNode.ts":
/*!**********************************!*\
  !*** ./src/nodes/DoWhileNode.ts ***!
  \**********************************/
/*! exports provided: DoWhileNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoWhileNode", function() { return DoWhileNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");


class DoWhileNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition, sentences) {
        super();
        this.condition = condition;
        this.sentences = sentences;
    }
    GO(env) {
        return Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__["LogicDoWhile"])(env, this.condition, this.sentences, null);
    }
}


/***/ }),

/***/ "./src/nodes/EqNode.ts":
/*!*****************************!*\
  !*** ./src/nodes/EqNode.ts ***!
  \*****************************/
/*! exports provided: EqNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqNode", function() { return EqNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class EqNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Igual"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ExpNode.ts":
/*!******************************!*\
  !*** ./src/nodes/ExpNode.ts ***!
  \******************************/
/*! exports provided: ExpNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpNode", function() { return ExpNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class ExpNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Potencia"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/HigherEqNode.ts":
/*!***********************************!*\
  !*** ./src/nodes/HigherEqNode.ts ***!
  \***********************************/
/*! exports provided: HigherEqNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigherEqNode", function() { return HigherEqNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class HigherEqNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["MayorEq"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/HigherNode.ts":
/*!*********************************!*\
  !*** ./src/nodes/HigherNode.ts ***!
  \*********************************/
/*! exports provided: HigherNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigherNode", function() { return HigherNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class HigherNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Mayor"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/IfNode.ts":
/*!*****************************!*\
  !*** ./src/nodes/IfNode.ts ***!
  \*****************************/
/*! exports provided: IfNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfNode", function() { return IfNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Envmnt */ "./src/utils/Envmnt.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");





class IfNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition, operationsTrue, operationsFalse) {
        super();
        this.condition = condition;
        this.operationsTrue = operationsTrue;
        this.operationsFalse = operationsFalse;
    }
    GO(env) {
        let condition = this.condition.Exe(env);
        if (condition instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_3__["Reference"]) {
            condition = condition.getValue();
        }
        if (!(condition instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["SemanticException"]("Condicion utilizada como parametro no soportada por sentencia If");
        }
        if (condition.getValue()) {
            const envTrue = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, this.operationsTrue);
            Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["PassPropsAndFuncs"])(env, envTrue);
            return envTrue.GO_ALL();
        }
        const envFalse = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, this.operationsFalse);
        Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["PassPropsAndFuncs"])(env, envFalse);
        return envFalse.GO_ALL();
    }
}


/***/ }),

/***/ "./src/nodes/MinorEqNode.ts":
/*!**********************************!*\
  !*** ./src/nodes/MinorEqNode.ts ***!
  \**********************************/
/*! exports provided: MinorEqNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinorEqNode", function() { return MinorEqNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class MinorEqNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["MenorEq"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/MinorNode.ts":
/*!********************************!*\
  !*** ./src/nodes/MinorNode.ts ***!
  \********************************/
/*! exports provided: MinorNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinorNode", function() { return MinorNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class MinorNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Menor"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ModNode.ts":
/*!******************************!*\
  !*** ./src/nodes/ModNode.ts ***!
  \******************************/
/*! exports provided: ModNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModNode", function() { return ModNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class ModNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Modulo"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/MulNode.ts":
/*!******************************!*\
  !*** ./src/nodes/MulNode.ts ***!
  \******************************/
/*! exports provided: MulNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MulNode", function() { return MulNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class MulNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Multiplicacion"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/NotNode.ts":
/*!******************************!*\
  !*** ./src/nodes/NotNode.ts ***!
  \******************************/
/*! exports provided: NotNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotNode", function() { return NotNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LogicalOperationsFunctions */ "./src/utils/LogicalOperationsFunctions.ts");


class NotNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
    }
    GO(env) {
        return Object(_utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Not"])(this.lf.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/NullNode.ts":
/*!*******************************!*\
  !*** ./src/nodes/NullNode.ts ***!
  \*******************************/
/*! exports provided: NullNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullNode", function() { return NullNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class NullNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor() {
        super();
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["NULL"]();
    }
}


/***/ }),

/***/ "./src/nodes/NumberNode.ts":
/*!*********************************!*\
  !*** ./src/nodes/NumberNode.ts ***!
  \*********************************/
/*! exports provided: NumberNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberNode", function() { return NumberNode; });
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");


class NumberNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_1__["Op"] {
    constructor(val) {
        super();
        this.val = val;
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["NUMBER"](this.val);
    }
}


/***/ }),

/***/ "./src/nodes/OrNode.ts":
/*!*****************************!*\
  !*** ./src/nodes/OrNode.ts ***!
  \*****************************/
/*! exports provided: OrNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrNode", function() { return OrNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LogicalOperationsFunctions */ "./src/utils/LogicalOperationsFunctions.ts");


class OrNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Or"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ReAddNode.ts":
/*!********************************!*\
  !*** ./src/nodes/ReAddNode.ts ***!
  \********************************/
/*! exports provided: ReAddNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAddNode", function() { return ReAddNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class ReAddNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf) {
        super();
        this.lf = lf;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Add"])(this.lf.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignAddNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignAddNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignAddNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignAddNode", function() { return ReAsignAddNode; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");



class ReAsignAddNode extends _index__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _index__WEBPACK_IMPORTED_MODULE_0__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_2__["Suma"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignDivNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignDivNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignDivNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignDivNode", function() { return ReAsignDivNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");




class ReAsignDivNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["Division"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignModNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignModNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignModNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignModNode", function() { return ReAsignModNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");




class ReAsignModNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["Modulo"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignMulNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignMulNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignMulNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignMulNode", function() { return ReAsignMulNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");




class ReAsignMulNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["Multiplicacion"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignSubNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignSubNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignSubNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignSubNode", function() { return ReAsignSubNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");




class ReAsignSubNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["Resta"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReSubNode.ts":
/*!********************************!*\
  !*** ./src/nodes/ReSubNode.ts ***!
  \********************************/
/*! exports provided: ReSubNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReSubNode", function() { return ReSubNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class ReSubNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf) {
        super();
        this.lf = lf;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Sub"])(this.lf.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ReturnObj.ts":
/*!********************************!*\
  !*** ./src/nodes/ReturnObj.ts ***!
  \********************************/
/*! exports provided: ReturnObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnObj", function() { return ReturnObj; });
/* harmony import */ var _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Cntnr */ "./src/utils/Cntnr.ts");

class ReturnObj extends _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(returnn) {
        super();
        this.toString = () => {
            return "mi objeto return (ReturnObj)";
        };
        this.returnn = returnn;
    }
    getValue() {
        return this.returnn;
    }
}


/***/ }),

/***/ "./src/nodes/SentenceTernaryNode.ts":
/*!******************************************!*\
  !*** ./src/nodes/SentenceTernaryNode.ts ***!
  \******************************************/
/*! exports provided: SentenceTernaryNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceTernaryNode", function() { return SentenceTernaryNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");




class SentenceTernaryNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition, trueSentence, falseSentence) {
        super();
        this.condicion = condition;
        this.trueSentence = trueSentence;
        this.falseSentence = falseSentence;
    }
    GO(env) {
        let ans = this.condicion.Exe(env);
        if (ans instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            ans = ans.getValue();
        }
        if (!(ans instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_3__["SemanticException"]("Condicion utilizada con parametro no soportada por operador ternario");
        }
        if (ans.getValue()) {
            return this.trueSentence.Exe(env);
        }
        return this.falseSentence.Exe(env);
    }
}


/***/ }),

/***/ "./src/nodes/StringNode.ts":
/*!*********************************!*\
  !*** ./src/nodes/StringNode.ts ***!
  \*********************************/
/*! exports provided: StringNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringNode", function() { return StringNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class StringNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(val) {
        super();
        this.val = val;
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["STRING"](this.val.substring(1, this.val.length - 1));
    }
}


/***/ }),

/***/ "./src/nodes/SubNode.ts":
/*!******************************!*\
  !*** ./src/nodes/SubNode.ts ***!
  \******************************/
/*! exports provided: SubNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNode", function() { return SubNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class SubNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Resta"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/SumNode.ts":
/*!******************************!*\
  !*** ./src/nodes/SumNode.ts ***!
  \******************************/
/*! exports provided: SumNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumNode", function() { return SumNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class SumNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Suma"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/UndefinedNode.ts":
/*!************************************!*\
  !*** ./src/nodes/UndefinedNode.ts ***!
  \************************************/
/*! exports provided: UndefinedNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndefinedNode", function() { return UndefinedNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class UndefinedNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor() {
        super();
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]();
    }
}


/***/ }),

/***/ "./src/nodes/WhileNode.ts":
/*!********************************!*\
  !*** ./src/nodes/WhileNode.ts ***!
  \********************************/
/*! exports provided: WhileNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhileNode", function() { return WhileNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");


class WhileNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition, sentences) {
        super();
        this.condition = condition;
        this.sentences = sentences;
    }
    GO(env) {
        return Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__["LogicWhile"])(env, this.condition, this.sentences, null);
    }
}


/***/ }),

/***/ "./src/utils/AlgebraicOperationsFunctions.ts":
/*!***************************************************!*\
  !*** ./src/utils/AlgebraicOperationsFunctions.ts ***!
  \***************************************************/
/*! exports provided: Suma, Resta, Multiplicacion, Division, Modulo, Potencia, Add, Sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suma", function() { return Suma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resta", function() { return Resta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiplicacion", function() { return Multiplicacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Division", function() { return Division; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modulo", function() { return Modulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Potencia", function() { return Potencia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sub", function() { return Sub; });
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



function Suma(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Sumar(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} + ${rt.typo} ) no permitida.`);
    }
    function Sumar(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() + rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() + rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf + rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf + rt.getValue());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Resta(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Restar(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} - ${rt.typo} ) no permitida.`);
    }
    function Restar(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() - rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() - rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() - rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() - rt.getValueNumber());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Multiplicacion(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Multiplicar(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} * ${rt.typo} ) no permitida.`);
    }
    function Multiplicar(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() * rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() * rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() * rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() * rt.getValueNumber());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Division(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    if (rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]) {
        if (rt.getValue() === 0) {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]('Operación no válida, no se puede dividir entre 0');
        }
    }
    else if (rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]) {
        if (rt.getValueNumber() === 0) {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]('Operación no válida, no se puede dividir entre 0');
        }
    }
    try {
        return Dividir(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} / ${rt.typo} ) no permitida.`);
    }
    function Dividir(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() / rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() / rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() / rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() / rt.getValueNumber());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Modulo(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Mod(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} % ${rt.typo} ) no permitida.`);
    }
    function Mod(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() % rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() % rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() % rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() % rt.getValueNumber());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Potencia(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Pot(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} ^ ${rt.typo} ) no permitida.`);
    }
    function Pot(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](Math.pow(lf.getValue(), rt.getValue()));
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](Math.pow(lf.getValue(), rt.getValueNumber()));
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](Math.pow(lf.getValueNumber(), rt.getValue()));
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](Math.pow(lf.getValueNumber(), rt.getValueNumber()));
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Add(lf) {
    if (!(lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"])) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]("Operacion {ref++} permitida solamente sobre referencas");
    }
    const val = lf.getValue();
    if (val instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]) {
        lf.setValue(new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](val.getValue() + 1));
        return val;
    }
    throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]("Operacion {ref++} No se puede realizar sobre variables distintas de tipo number");
}
function Sub(lf) {
    if (!(lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"])) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]("Operacion {ref--} permitida solamente sobre referencas");
    }
    const val = lf.getValue();
    if (val instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]) {
        lf.setValue(new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](val.getValue() - 1));
        return val;
    }
    throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]("Operacion {ref--} No se puede realizar sobre variables distintas de tipo number");
}


/***/ }),

/***/ "./src/utils/Cntnr.ts":
/*!****************************!*\
  !*** ./src/utils/Cntnr.ts ***!
  \****************************/
/*! exports provided: Cntnr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cntnr", function() { return Cntnr; });
class Cntnr {
    constructor(owner) {
        this.props = new Map();
        this.owner = owner || null;
    }
    AsObjectProps() {
        let ans = "--------------------------------\n";
        this.props.forEach((v, k) => {
            ans += k + ' => ' + v + '\n';
        });
        ans += "--------------------------------\n";
        return ans;
    }
    AddProperty(id, cntnr) {
        id = id.toUpperCase();
        this.props.set(id, cntnr);
    }
    GetProperty(id) {
        id = id.toUpperCase();
        const val = this.props.get(id);
        if (val !== null && val !== undefined) {
            return val;
        }
        //this.props.set(id, new Reference());
        //return this.props.get(id);
        return undefined;
    }
    Declare(id, cntnr) {
        id = id.toUpperCase();
        this.props.set(id, cntnr);
    }
    GetTypo() {
        return this.typo;
    }
    SetTypo(typo) {
        this.typo = typo;
    }
    GetOwner() {
        return this.owner;
    }
}


/***/ }),

/***/ "./src/utils/Console.ts":
/*!******************************!*\
  !*** ./src/utils/Console.ts ***!
  \******************************/
/*! exports provided: Console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
class Console {
}
Console.log = '';


/***/ }),

/***/ "./src/utils/Envmnt.ts":
/*!*****************************!*\
  !*** ./src/utils/Envmnt.ts ***!
  \*****************************/
/*! exports provided: Envmnt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Envmnt", function() { return Envmnt; });
/* harmony import */ var _Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cntnr */ "./src/utils/Cntnr.ts");
/* harmony import */ var _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nodes/BreakObj */ "./src/nodes/BreakObj.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony import */ var _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodes/ContinueObj */ "./src/nodes/ContinueObj.ts");




class Envmnt extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(owner, operations) {
        super(owner);
        this.Extra = new Map();
        this.operations = operations;
        this.typo = "Ambito";
    }
    GO_ALL() {
        for (let op of this.operations) {
            try {
                let result = op.Exe(this);
                if (result instanceof _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_1__["BreakObj"] || result instanceof _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"] || result instanceof _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_3__["ContinueObj"]) {
                    return result;
                }
            }
            catch (e) {
                console.log(e.message);
            }
        }
        return null;
    }
}


/***/ }),

/***/ "./src/utils/LogicalOperationsFunctions.ts":
/*!*************************************************!*\
  !*** ./src/utils/LogicalOperationsFunctions.ts ***!
  \*************************************************/
/*! exports provided: Or, And, Not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Or", function() { return Or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "And", function() { return And; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Not", function() { return Not; });
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



function Or(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return or(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} || ${rt.typo} ) no permitida.`);
    }
    function or(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() || rt.getValue());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function And(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return and(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} && ${rt.typo} ) no permitida.`);
    }
    function and(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() && rt.getValue());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Not(lf) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    try {
        return not(lf);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ! ${lf.typo} ) no permitida.`);
    }
    function not(lf) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](!lf.getValue());
            default:
                throw new Error();
        }
    }
}


/***/ }),

/***/ "./src/utils/Op.ts":
/*!*************************!*\
  !*** ./src/utils/Op.ts ***!
  \*************************/
/*! exports provided: Op */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Op", function() { return Op; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");

class Op {
    Exe(env) {
        try {
            return this.GO(env);
        }
        catch (e) {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_0__["ErrorCompo"](e.message);
        }
    }
}


/***/ }),

/***/ "./src/utils/PrimitiveTypoContainer.ts":
/*!*********************************************!*\
  !*** ./src/utils/PrimitiveTypoContainer.ts ***!
  \*********************************************/
/*! exports provided: BOOLEAN, STRING, NUMBER, UNDEFINED, NAN, NULL, ARRAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLEAN", function() { return BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING", function() { return STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER", function() { return NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDEFINED", function() { return UNDEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAN", function() { return NAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NULL", function() { return NULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY", function() { return ARRAY; });
/* harmony import */ var _Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cntnr */ "./src/utils/Cntnr.ts");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _nativeFunctions_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nativeFunctions/length */ "./src/utils/nativeFunctions/length.ts");
/* harmony import */ var _nativeFunctions_push__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nativeFunctions/push */ "./src/utils/nativeFunctions/push.ts");
/* harmony import */ var _nativeFunctions_pop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nativeFunctions/pop */ "./src/utils/nativeFunctions/pop.ts");





class BOOLEAN extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(value) {
        super();
        this.toString = () => {
            return this.value ? "true" : "false";
        };
        this.getValueNumber = () => {
            return this.value ? 1 : 0;
        };
        this.getValue = () => {
            return this.value;
        };
        this.value = value;
        this.typo = "BOOLEAN";
    }
}
class STRING extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(value) {
        super();
        this.toString = () => {
            return this.value;
        };
        this.getValue = () => {
            return this.value;
        };
        this.value = value || '';
        this.typo = "STRING";
    }
}
class NUMBER extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(value) {
        super();
        this.toString = () => {
            return this.value + '';
        };
        this.getValue = () => {
            return this.value;
        };
        this.value = value || 0;
        this.typo = "NUMBER";
    }
}
class UNDEFINED extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
        this.toString = () => {
            return "undefined";
        };
        this.typo = "UNDEFINED";
    }
}
class NAN extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
        this.toString = () => {
            return "NaN";
        };
        this.typo = "NAN";
    }
}
class NULL extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
        this.toString = () => {
            return null;
        };
        this.getValue = () => {
            return null;
        };
        this.typo = "NULL";
    }
}
class ARRAY extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(value, contentType = 'ANY') {
        super();
        this.toString = () => {
            const size = this.value.length;
            let log = `Array (${size}) [`;
            for (let i = 0; i < size; i++) {
                log += `${this.value[i].getValue()}`;
                if (size - 1 !== i) {
                    log += ', ';
                }
            }
            log += ']';
            return log;
        };
        this.getValue = (index) => {
            let val = this.value[index];
            if (val !== undefined) {
                return val;
            }
            let size = this.value.length;
            while (size <= index) {
                this.value.push(new _Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]());
                size++;
            }
            return this.value[index];
        };
        this.getValueList = () => {
            return this.value;
        };
        this.value = value || new Array();
        this.typo = `ARRAY`;
        this.contentType = contentType;
        try {
            this.Declare("length", new _nativeFunctions_length__WEBPACK_IMPORTED_MODULE_2__["Length"](this));
            this.Declare("push", new _nativeFunctions_push__WEBPACK_IMPORTED_MODULE_3__["Push"](this));
            this.Declare("pop", new _nativeFunctions_pop__WEBPACK_IMPORTED_MODULE_4__["Pop"](this));
        }
        catch (e) {
            throw new Error();
        }
    }
    addValue(value) {
        this.value.push(value);
    }
}


/***/ }),

/***/ "./src/utils/Reference.ts":
/*!********************************!*\
  !*** ./src/utils/Reference.ts ***!
  \********************************/
/*! exports provided: Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return Reference; });
/* harmony import */ var _Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cntnr */ "./src/utils/Cntnr.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



class Reference extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(tipoNombre = 'ANY', isConst = false) {
        super();
        this.isConst = false;
        this.tipoNombre = 'any';
        this.getReferenceValue = () => {
            return this.tipoNombre.toUpperCase();
        };
        this.toString = () => {
            return this.value.toString();
        };
        this.getValue = () => {
            return this.value;
        };
        this.setValue = (value) => {
            this.value = value;
        };
        this.Call = (args) => {
            for (let arg of args) {
                console.log(arg);
            }
            return null;
        };
        this.typo = "REFERENCE";
        this.value = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["DefaultValue"])(tipoNombre);
        this.tipoNombre = tipoNombre;
        this.isConst = isConst;
    }
    PutValueOnReference(value) {
        if (this.isConst && !(this.value instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"])) {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]('No se puede cambiar el valor de una constante');
        }
        let v;
        if (value instanceof Reference) {
            v = value.value;
        }
        else {
            v = value;
        }
        if (this.tipoNombre !== v.typo
            && this.tipoNombre !== 'ANY'
            && v.typo !== 'NULL'
            && v.typo !== 'UNDEFINED') {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Tipo ${v.typo} no puede ser asignado a Variable de tipo ${this.tipoNombre}`);
        }
        this.value = v;
    }
}


/***/ }),

/***/ "./src/utils/RelationalOperationsFunctions.ts":
/*!****************************************************!*\
  !*** ./src/utils/RelationalOperationsFunctions.ts ***!
  \****************************************************/
/*! exports provided: Igual, Diferente, Mayor, Menor, MayorEq, MenorEq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Igual", function() { return Igual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diferente", function() { return Diferente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mayor", function() { return Mayor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menor", function() { return Menor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MayorEq", function() { return MayorEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenorEq", function() { return MenorEq; });
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



function Igual(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Eq(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} == ${rt.typo} ) no permitida.`);
    }
    function Eq(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() === rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() === rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() == rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() == rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() === rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                }
        }
    }
}
function Diferente(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Dif(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} == ${rt.typo} ) no permitida.`);
    }
    function Dif(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() !== rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() !== rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() != rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() != rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() !== rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                }
            default:
                throw new Error();
        }
    }
}
function Mayor(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return May(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} > ${rt.typo} ) no permitida.`);
    }
    function May(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() > rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() > rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() > rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() > rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() > rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Menor(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Min(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} < ${rt.typo} ) no permitida.`);
    }
    function Min(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() < rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() < rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() < rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() < rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() < rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function MayorEq(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return MayEq(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} >= ${rt.typo} ) no permitida.`);
    }
    function MayEq(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() >= rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() >= rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() >= rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() >= rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() >= rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function MenorEq(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return MinEq(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} >= ${rt.typo} ) no permitida.`);
    }
    function MinEq(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() <= rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() <= rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() <= rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() <= rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() <= rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}


/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/*! exports provided: SemanticException, ErrorCompo, DefaultValue, FindVar, PassPropsAndFuncs, LogicWhile, LogicDoWhile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticException", function() { return SemanticException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCompo", function() { return ErrorCompo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValue", function() { return DefaultValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindVar", function() { return FindVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassPropsAndFuncs", function() { return PassPropsAndFuncs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicWhile", function() { return LogicWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicDoWhile", function() { return LogicDoWhile; });
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _Envmnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Envmnt */ "./src/utils/Envmnt.ts");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodes/BreakObj */ "./src/nodes/BreakObj.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony import */ var _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nodes/ContinueObj */ "./src/nodes/ContinueObj.ts");






class SemanticException extends Error {
    constructor(message) {
        super(message);
    }
}
class ErrorCompo extends Error {
    constructor(message) {
        super(message);
    }
}
function DefaultValue(typo) {
    switch (typo.toUpperCase()) {
        case "NULL":
            return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["NULL"]();
        default:
            return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["UNDEFINED"]();
    }
}
function FindVar(cont, identifier) {
    let ownerCntnr = cont;
    while (ownerCntnr != null) {
        if (ownerCntnr.GetProperty(identifier) !== undefined) {
            return ownerCntnr.GetProperty(identifier);
        }
        ownerCntnr = ownerCntnr.GetOwner();
    }
    throw new SemanticException(`identificador ${identifier} no encontrado`);
}
function PassPropsAndFuncs(father, son) {
    // father.props.forEach((v, k) => {
    //     son.Declare(k, v);
    // });
}
function LogicWhile(env, condition, sentences, extra) {
    let ans = condition.Exe(env);
    if (ans instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
        ans = ans.getValue();
    }
    if (!(ans instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["BOOLEAN"])) {
        throw new SemanticException("Condicion utilizada en ciclo while no soportada");
    }
    let tmp = ans;
    while (tmp.getValue()) {
        const env0 = new _Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, sentences);
        PassPropsAndFuncs(env, env0);
        const ret = env0.GO_ALL();
        if (ret instanceof _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_3__["BreakObj"]) {
            break;
        }
        if (ret instanceof _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_4__["ReturnObj"]) {
            return ret;
        }
        if (ret instanceof _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_5__["ContinueObj"]) {
            continue;
        }
        if (extra !== null) {
            extra.Exe(env);
        }
        let ans0 = condition.Exe(env);
        if (ans0 instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
            ans0 = ans0.getValue();
        }
        tmp = ans0;
    }
    return null;
}
function LogicDoWhile(env, condition, sentences, extra) {
    let ans = condition.Exe(env);
    if (ans instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
        ans = ans.getValue();
    }
    if (!(ans instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["BOOLEAN"])) {
        throw new SemanticException("Condicion utilizada en ciclo while no soportada");
    }
    let env0 = new _Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, sentences);
    PassPropsAndFuncs(env, env0);
    env0.GO_ALL();
    let ans0 = condition.Exe(env);
    if (ans0 instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
        ans0 = ans0.getValue();
    }
    let tmp = ans0;
    while (tmp.getValue()) {
        const env0 = new _Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, sentences);
        PassPropsAndFuncs(env, env0);
        const ret = env0.GO_ALL();
        if (ret instanceof _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_3__["BreakObj"]) {
            break;
        }
        if (ret instanceof _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_4__["ReturnObj"]) {
            return ret;
        }
        if (ret instanceof _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_5__["ContinueObj"]) {
            continue;
        }
        if (extra !== null) {
            extra.Exe(env);
        }
        let ans0 = condition.Exe(env);
        if (ans0 instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
            ans0 = ans0.getValue();
        }
        tmp = ans0;
    }
    return null;
}


/***/ }),

/***/ "./src/utils/functions/FunctionRepresent.ts":
/*!**************************************************!*\
  !*** ./src/utils/functions/FunctionRepresent.ts ***!
  \**************************************************/
/*! exports provided: FunctionRepresent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionRepresent", function() { return FunctionRepresent; });
/* harmony import */ var _Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cntnr */ "./src/utils/Cntnr.ts");

class FunctionRepresent extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
}


/***/ }),

/***/ "./src/utils/functions/Native.ts":
/*!***************************************!*\
  !*** ./src/utils/functions/Native.ts ***!
  \***************************************/
/*! exports provided: Native */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Native", function() { return Native; });
/* harmony import */ var _FunctionRepresent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionRepresent */ "./src/utils/functions/FunctionRepresent.ts");

class Native extends _FunctionRepresent__WEBPACK_IMPORTED_MODULE_0__["FunctionRepresent"] {
}


/***/ }),

/***/ "./src/utils/nativeFunctions/length.ts":
/*!*********************************************!*\
  !*** ./src/utils/nativeFunctions/length.ts ***!
  \*********************************************/
/*! exports provided: Length */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Length", function() { return Length; });
/* harmony import */ var _functions_Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/Native */ "./src/utils/functions/Native.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");



class Length extends _functions_Native__WEBPACK_IMPORTED_MODULE_0__["Native"] {
    constructor(array) {
        super();
        this.array = array;
    }
    EXE(env0, args) {
        let size = this.array.getValueList().length;
        return new _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"](new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["NUMBER"](size));
    }
}


/***/ }),

/***/ "./src/utils/nativeFunctions/pop.ts":
/*!******************************************!*\
  !*** ./src/utils/nativeFunctions/pop.ts ***!
  \******************************************/
/*! exports provided: Pop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pop", function() { return Pop; });
/* harmony import */ var _functions_Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/Native */ "./src/utils/functions/Native.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");



class Pop extends _functions_Native__WEBPACK_IMPORTED_MODULE_0__["Native"] {
    constructor(array) {
        super();
        this.array = array;
    }
    EXE(env0, args) {
        let value = this.array.getValueList().pop();
        if (value === undefined) {
            return new _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"](new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]());
        }
        return new _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"](value);
    }
}


/***/ }),

/***/ "./src/utils/nativeFunctions/push.ts":
/*!*******************************************!*\
  !*** ./src/utils/nativeFunctions/push.ts ***!
  \*******************************************/
/*! exports provided: Push */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Push", function() { return Push; });
/* harmony import */ var _functions_Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/Native */ "./src/utils/functions/Native.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Reference */ "./src/utils/Reference.ts");




class Push extends _functions_Native__WEBPACK_IMPORTED_MODULE_0__["Native"] {
    constructor(array) {
        super();
        this.array = array;
    }
    EXE(env0, args) {
        let size = this.array.getValueList().length;
        for (let i in args) {
            let ref = new _Reference__WEBPACK_IMPORTED_MODULE_3__["Reference"]();
            ref.setValue(args[i]);
            this.array.addValue(ref);
        }
        return new _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"](new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["NUMBER"](size));
    }
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Qvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2FzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3QvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9BbmROb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Bc2lnbk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0Jvb2xlYW5Ob2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9CcmVha05vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0JyZWFrT2JqLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Db25zb2xlTG9nTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvQ29udGludWVOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Db250aW51ZU9iai50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvQ3JlYXRlQXJyVmFyTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvQ3JlYXRlQXJyYXlOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9DcmVhdGVJZFZhck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0NyZWF0ZU9iakZ1bk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0NyZWF0ZU9ialZhck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0RlY2xhcmVWYXJMaXN0Tm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvRGVjbGFyZVZhck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0RpZk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0Rpdk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0RvV2hpbGVOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9FcU5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0V4cE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0hpZ2hlckVxTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvSGlnaGVyTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvSWZOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9NaW5vckVxTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvTWlub3JOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Nb2ROb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9NdWxOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Ob3ROb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9OdWxsTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvTnVtYmVyTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvT3JOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZUFkZE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1JlQXNpZ25BZGROb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZUFzaWduRGl2Tm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvUmVBc2lnbk1vZE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1JlQXNpZ25NdWxOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZUFzaWduU3ViTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvUmVTdWJOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZXR1cm5PYmoudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1NlbnRlbmNlVGVybmFyeU5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1N0cmluZ05vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1N1Yk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1N1bU5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1VuZGVmaW5lZE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1doaWxlTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvQ250bnIudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL0NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL0Vudm1udC50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvTG9naWNhbE9wZXJhdGlvbnNGdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL09wLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9SZWZlcmVuY2UudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL1JlbGF0aW9uYWxPcGVyYXRpb25zRnVuY3Rpb25zLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvZnVuY3Rpb25zL0Z1bmN0aW9uUmVwcmVzZW50LnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9mdW5jdGlvbnMvTmF0aXZlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9uYXRpdmVGdW5jdGlvbnMvbGVuZ3RoLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9uYXRpdmVGdW5jdGlvbnMvcG9wLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9uYXRpdmVGdW5jdGlvbnMvcHVzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLG9CQUFvQiwyQkFBMkI7UUFDL0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsbUJBQW1CLGNBQWM7UUFDakM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixLQUFLO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsdUNBQXVDO1FBQ3hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7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LEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksR0FBRyxHQUFHLElBQUksb0RBQVMsRUFBRSxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksMERBQVMsQ0FBQyxJQUFJLDhEQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0oiLCJmaWxlIjoibm9kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhc3RcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXN0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHRoaXNbXCJ3ZWJwYWNrSG90VXBkYXRlYXN0XCJdO1xuIFx0dGhpc1tcIndlYnBhY2tIb3RVcGRhdGVhc3RcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCIwNGZhMDA3NmYzYmFlNDhhZTAxNFwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG4gXHRcdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0c3dpdGNoIChob3RTdGF0dXMpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuIFx0XHRcdFx0XHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG4gXHRcdFx0XHRcdFx0KGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9XG4gXHRcdFx0XHRcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdH1cbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaCwgaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwibWFpblwiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gXHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpIHtcbiBcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHQhbW9kdWxlIHx8XG4gXHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbiBcdFx0XHRcdClcbiBcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuIFx0XHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbiBcdFx0XHRcdCFpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRwYXJlbnRzOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5wYXJlbnRzLnNsaWNlKCksXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGlmIChob3RVcGRhdGVOZXdIYXNoICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVuZGVmaW5lZDtcbiBcdFx0fVxuIFx0XHRob3RVcGRhdGUgPSB1bmRlZmluZWQ7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IGl0ZW0ucGFyZW50cztcbiBcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSBtb2R1bGVJZDtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdHJldHVybiBob3RBcHBseUludGVybmFsKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24obGlzdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiBcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRyZXR1cm4gbGlzdDtcbiBcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoIWhvdFVwZGF0ZSkgaG90VXBkYXRlID0ge307XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZSk7XG4gXHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuIFx0XHRcdHJldHVybiB0cnVlO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBtb2R1bGVJZCkpXG4gXHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvaW5kZXgudHNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7VU5ERUZJTkVELCBOVUxMfSBmcm9tIFwiLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtPcH0gZnJvbSBcIi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtDb25zb2xlfSBmcm9tIFwiLi91dGlscy9Db25zb2xlXCI7XHJcblxyXG5pbXBvcnQge0NvbnNvbGVMb2dOb2RlfSBmcm9tIFwiLi9ub2Rlcy9Db25zb2xlTG9nTm9kZVwiO1xyXG5pbXBvcnQge051bWJlck5vZGV9IGZyb20gXCIuL25vZGVzL051bWJlck5vZGVcIjtcclxuaW1wb3J0IHtTdHJpbmdOb2RlfSBmcm9tIFwiLi9ub2Rlcy9TdHJpbmdOb2RlXCI7XHJcbmltcG9ydCB7IEJvb2xlYW5Ob2RlIH0gZnJvbSBcIi4vbm9kZXMvQm9vbGVhbk5vZGVcIjtcclxuaW1wb3J0IHsgTnVsbE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9OdWxsTm9kZVwiO1xyXG5pbXBvcnQgeyBVbmRlZmluZWROb2RlIH0gZnJvbSBcIi4vbm9kZXMvVW5kZWZpbmVkTm9kZVwiO1xyXG5pbXBvcnQgeyBEZWNsYXJlVmFyTm9kZSB9IGZyb20gXCIuL25vZGVzL0RlY2xhcmVWYXJOb2RlXCI7XHJcbmltcG9ydCB7IERlY2xhcmVWYXJMaXN0Tm9kZSB9IGZyb20gXCIuL25vZGVzL0RlY2xhcmVWYXJMaXN0Tm9kZVwiO1xyXG5pbXBvcnQgeyBDcmVhdGVJZFZhck5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9DcmVhdGVJZFZhck5vZGVcIjtcclxuaW1wb3J0IHsgQXNpZ25Ob2RlIH0gZnJvbSBcIi4vbm9kZXMvQXNpZ25Ob2RlXCI7XHJcbmltcG9ydCB7IFN1bU5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9TdW1Ob2RlXCI7XHJcbmltcG9ydCB7IFN1Yk5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9TdWJOb2RlXCI7XHJcbmltcG9ydCB7IE11bE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9NdWxOb2RlXCI7XHJcbmltcG9ydCB7IERpdk5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9EaXZOb2RlXCI7XHJcbmltcG9ydCB7IE1vZE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9Nb2ROb2RlXCI7XHJcbmltcG9ydCB7IEV4cE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9FeHBOb2RlXCI7XHJcbmltcG9ydCB7IEVxTm9kZSB9IGZyb20gXCIuL25vZGVzL0VxTm9kZVwiO1xyXG5pbXBvcnQgeyBEaWZOb2RlIH0gZnJvbSBcIi4vbm9kZXMvRGlmTm9kZVwiO1xyXG5pbXBvcnQgeyBIaWdoZXJOb2RlIH0gZnJvbSBcIi4vbm9kZXMvSGlnaGVyTm9kZVwiO1xyXG5pbXBvcnQgeyBNaW5vck5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9NaW5vck5vZGVcIjtcclxuaW1wb3J0IHsgSGlnaGVyRXFOb2RlIH0gZnJvbSBcIi4vbm9kZXMvSGlnaGVyRXFOb2RlXCI7XHJcbmltcG9ydCB7IE1pbm9yRXFOb2RlIH0gZnJvbSBcIi4vbm9kZXMvTWlub3JFcU5vZGVcIjtcclxuaW1wb3J0IHsgT3JOb2RlIH0gZnJvbSBcIi4vbm9kZXMvT3JOb2RlXCI7XHJcbmltcG9ydCB7IEFuZE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9BbmROb2RlXCI7XHJcbmltcG9ydCB7IE5vdE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9Ob3ROb2RlXCI7XHJcbmltcG9ydCB7IFJlQXNpZ25BZGROb2RlIH0gZnJvbSBcIi4vbm9kZXMvUmVBc2lnbkFkZE5vZGVcIjtcclxuaW1wb3J0IHsgUmVBc2lnblN1Yk5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9SZUFzaWduU3ViTm9kZVwiO1xyXG5pbXBvcnQgeyBSZUFzaWduTXVsTm9kZSB9IGZyb20gXCIuL25vZGVzL1JlQXNpZ25NdWxOb2RlXCI7XHJcbmltcG9ydCB7IFJlQXNpZ25EaXZOb2RlIH0gZnJvbSBcIi4vbm9kZXMvUmVBc2lnbkRpdk5vZGVcIjtcclxuaW1wb3J0IHsgUmVBc2lnbk1vZE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9SZUFzaWduTW9kTm9kZVwiO1xyXG5pbXBvcnQgeyBSZUFkZE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9SZUFkZE5vZGVcIjtcclxuaW1wb3J0IHsgUmVTdWJOb2RlIH0gZnJvbSBcIi4vbm9kZXMvUmVTdWJOb2RlXCI7XHJcbmltcG9ydCB7IENyZWF0ZUFycmF5Tm9kZSB9IGZyb20gXCIuL25vZGVzL0NyZWF0ZUFycmF5Tm9kZVwiO1xyXG5pbXBvcnQgeyBDcmVhdGVBcnJWYXJOb2RlIH0gZnJvbSBcIi4vbm9kZXMvQ3JlYXRlQXJyVmFyTm9kZVwiO1xyXG5pbXBvcnQgeyBSZXR1cm5PYmogfSBmcm9tIFwiLi9ub2Rlcy9SZXR1cm5PYmpcIjtcclxuaW1wb3J0IHsgQ3JlYXRlT2JqVmFyTm9kZSB9IGZyb20gXCIuL25vZGVzL0NyZWF0ZU9ialZhck5vZGVcIjtcclxuaW1wb3J0IHsgQ3JlYXRlT2JqRnVuTm9kZSB9IGZyb20gXCIuL25vZGVzL0NyZWF0ZU9iakZ1bk5vZGVcIjtcclxuaW1wb3J0IHsgU2VudGVuY2VUZXJuYXJ5Tm9kZSB9IGZyb20gXCIuL25vZGVzL1NlbnRlbmNlVGVybmFyeU5vZGVcIjtcclxuaW1wb3J0IHsgQnJlYWtOb2RlIH0gZnJvbSBcIi4vbm9kZXMvQnJlYWtOb2RlXCI7XHJcbmltcG9ydCB7IENvbnRpbnVlTm9kZSB9IGZyb20gXCIuL25vZGVzL0NvbnRpbnVlTm9kZVwiO1xyXG5pbXBvcnQgeyBJZk5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9JZk5vZGVcIjtcclxuaW1wb3J0IHsgV2hpbGVOb2RlIH0gZnJvbSBcIi4vbm9kZXMvV2hpbGVOb2RlXCI7XHJcbmltcG9ydCB7IERvV2hpbGVOb2RlIH0gZnJvbSBcIi4vbm9kZXMvRG9XaGlsZU5vZGVcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBDb25zb2xlLFxyXG4gICAgQ250bnIsXHJcbiAgICBFbnZtbnQsXHJcbiAgICBPcCxcclxuICAgIE5VTEwsXHJcbiAgICBVTkRFRklORUQsXHJcbiAgICBSZWZlcmVuY2UsXHJcblxyXG4gICAgQ29uc29sZUxvZ05vZGUsXHJcbiAgICBOdW1iZXJOb2RlLFxyXG4gICAgU3RyaW5nTm9kZSxcclxuICAgIEJvb2xlYW5Ob2RlLFxyXG4gICAgTnVsbE5vZGUsXHJcbiAgICBVbmRlZmluZWROb2RlLFxyXG5cclxuICAgIERlY2xhcmVWYXJOb2RlLFxyXG4gICAgRGVjbGFyZVZhckxpc3ROb2RlLFxyXG5cclxuICAgIENyZWF0ZUlkVmFyTm9kZSxcclxuXHJcbiAgICBBc2lnbk5vZGUsXHJcblxyXG4gICAgU3VtTm9kZSxcclxuICAgIFN1Yk5vZGUsXHJcbiAgICBNdWxOb2RlLFxyXG4gICAgRGl2Tm9kZSxcclxuICAgIE1vZE5vZGUsXHJcbiAgICBFeHBOb2RlLFxyXG5cclxuICAgIEVxTm9kZSxcclxuICAgIERpZk5vZGUsXHJcbiAgICBIaWdoZXJOb2RlLFxyXG4gICAgTWlub3JOb2RlLFxyXG4gICAgSGlnaGVyRXFOb2RlLFxyXG4gICAgTWlub3JFcU5vZGUsXHJcblxyXG4gICAgT3JOb2RlLFxyXG4gICAgQW5kTm9kZSxcclxuICAgIE5vdE5vZGUsXHJcblxyXG4gICAgUmVBc2lnbkFkZE5vZGUsXHJcbiAgICBSZUFzaWduU3ViTm9kZSxcclxuICAgIFJlQXNpZ25NdWxOb2RlLFxyXG4gICAgUmVBc2lnbkRpdk5vZGUsXHJcbiAgICBSZUFzaWduTW9kTm9kZSxcclxuXHJcbiAgICBSZUFkZE5vZGUsXHJcbiAgICBSZVN1Yk5vZGUsXHJcblxyXG4gICAgQ3JlYXRlQXJyYXlOb2RlLFxyXG4gICAgQ3JlYXRlQXJyVmFyTm9kZSxcclxuXHJcbiAgICBSZXR1cm5PYmosXHJcblxyXG4gICAgQ3JlYXRlT2JqVmFyTm9kZSxcclxuICAgIENyZWF0ZU9iakZ1bk5vZGUsXHJcblxyXG4gICAgU2VudGVuY2VUZXJuYXJ5Tm9kZSxcclxuXHJcbiAgICBCcmVha05vZGUsXHJcbiAgICBDb250aW51ZU5vZGUsXHJcblxyXG4gICAgSWZOb2RlLFxyXG4gICAgV2hpbGVOb2RlLFxyXG4gICAgRG9XaGlsZU5vZGUsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeGVjdXRlQVNUKHNlbnRlbmNlczogQXJyYXk8T3A+KSB7XHJcbiAgICBDb25zb2xlLmxvZyA9ICcnO1xyXG4gICAgY29uc3QgZW52ID0gbmV3IEVudm1udChudWxsLCBzZW50ZW5jZXMpO1xyXG4gICAgZW52LkdPX0FMTCgpO1xyXG59XHJcblxyXG5pZiAobW9kdWxlICYmIG1vZHVsZS5ob3QpIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbiIsImltcG9ydCB7IE9wIH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7QW5kfSBmcm9tIFwiLi4vdXRpbHMvTG9naWNhbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5kTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIEFuZCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yLCB0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFzaWduTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgbGZWYWw6IG9iamVjdCA9IHRoaXMubGYuRXhlKGVudik7XHJcbiAgICAgICAgY29uc3QgcnRWYWw6IG9iamVjdCA9IHRoaXMucnQuRXhlKGVudik7XHJcblxyXG4gICAgICAgIGlmICghKGxmVmFsIGluc3RhbmNlb2YgUmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE5vIHNlIHB1ZWRlIGFzaWduYXIgYSAkeyhsZlZhbCBhcyBDbnRucikudHlwb30sIGxhcyBhc2lnbmFjaW9uZXMgc29sbyBwdWVkZW4gc2VyIHNvYnJlIHVuYSByZWZlcmVuY2lhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIChsZlZhbCBhcyBSZWZlcmVuY2UpLlB1dFZhbHVlT25SZWZlcmVuY2UocnRWYWwgYXMgQ250bnIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0JPT0xFQU59IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbk5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odGhpcy52YWwpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0JyZWFrT2JqfSBmcm9tIFwiLi9CcmVha09ialwiO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBCcmVha05vZGUgZXh0ZW5kcyBPcHtcclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gbmV3IEJyZWFrT2JqKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmVha09iaiBleHRlbmRzIENudG5ye1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge0NvbnNvbGV9IGZyb20gXCIuLi91dGlscy9Db25zb2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZ05vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgZXhwcmVzc2lvbjogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpIDogb2JqZWN0IHtcclxuICAgICAgICBsZXQgdmFsID0gdGhpcy5leHByZXNzaW9uLkV4ZShlbnYpO1xyXG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgdmFsID0gKHZhbCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zb2xlLmxvZyArPSBgPl8gJHt2YWx9IFxcbmA7XHJcbiAgICAgICAgY29uc29sZS5sb2coYD5fICR7dmFsfWApO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0NvbnRpbnVlT2JqfSBmcm9tIFwiLi9Db250aW51ZU9ialwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRpbnVlTm9kZSBleHRlbmRzIE9we1xyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVPYmooKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRpbnVlT2JqIGV4dGVuZHMgQ250bnJ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtBUlJBWSwgTlVNQkVSLCBVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQXJyVmFyTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZDogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGluZGV4OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogT3AsIGluZGV4OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IGlkUmVmID0gdGhpcy5pZC5FeGUoZW52KSBhcyBDbnRucjtcclxuICAgICAgICBpZiAoIShpZFJlZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBMbGFtYWRhIGEgQXJyZWdsbyAke2lkUmVmfSBubyBkZWZpbmlkby5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXguRXhlKGVudikgYXMgQ250bnI7XHJcbiAgICAgICAgaWYgKGluZGV4IGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gKGluZGV4IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEoaW5kZXggaW5zdGFuY2VvZiBOVU1CRVIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIkVsIGluZGljZSBwYXJhIGFjY2VzYXIgZGViZSBzZXIgZGUgdGlwbyBOVU1CRVJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVmID0gKGlkUmVmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgaWYgKCEocmVmIGluc3RhbmNlb2YgQVJSQVkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVU5ERUZJTkVEKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKHJlZiBhcyBBUlJBWSkuZ2V0VmFsdWUoKGluZGV4IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBPcCB9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtBUlJBWX0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVBcnJheU5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsczogQXJyYXk8T3A+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHM6IEFycmF5PE9wPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWxzID0gdmFscztcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IHJlYWwgPSBuZXcgQXJyYXk8Q250bnI+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgb3Agb2YgdGhpcy52YWxzKSB7XHJcbiAgICAgICAgICAgIGxldCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKCk7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZS5QdXRWYWx1ZU9uUmVmZXJlbmNlKG9wLkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgICAgICAgICAgcmVhbC5wdXNoKHJlZmVyZW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQVJSQVkocmVhbCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7RmluZFZhcn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlSWRWYXJOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KSA6IG9iamVjdHtcclxuICAgICAgICByZXR1cm4gRmluZFZhcihlbnYsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQgeyBFbnZtbnQgfSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0Z1bmN0aW9uUmVwcmVzZW50fSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zL0Z1bmN0aW9uUmVwcmVzZW50XCI7XHJcbmltcG9ydCB7UmV0dXJuT2JqfSBmcm9tIFwiLi9SZXR1cm5PYmpcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVPYmpGdW5Ob2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9iamVjdDogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZ1bklkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFyZ3M6IEFycmF5PE9wPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3Q6IE9wLCBmdW5JZDogc3RyaW5nLCBhcmdzOiBBcnJheTxPcD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMuZnVuSWQgPSBmdW5JZDtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBsZXQgcmVmZSA9IHRoaXMub2JqZWN0LkV4ZShlbnYpO1xyXG4gICAgICAgIGlmIChyZWZlIGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIHJlZmUgPSAocmVmZSBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZnVuID0gKHJlZmUgYXMgQ250bnIpLkdldFByb3BlcnR5KHRoaXMuZnVuSWQpO1xyXG4gICAgICAgIGlmICghKGZ1biBpbnN0YW5jZW9mIEZ1bmN0aW9uUmVwcmVzZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBuZXcgQXJyYXk8Q250bnI+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgYXJnIG9mIHRoaXMuYXJncykge1xyXG4gICAgICAgICAgICBsZXQgYXJnVmFsdWUgPSBhcmcuRXhlKGVudik7XHJcbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZSBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYXJnVmFsdWUgPSAoYXJnVmFsdWUgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZXMucHVzaChhcmdWYWx1ZSBhcyBDbnRucik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYW5zID0gZnVuLkVYRShlbnYsIHJlZmVyZW5jZXMpO1xyXG4gICAgICAgIGlmIChhbnMgaW5zdGFuY2VvZiBSZXR1cm5PYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIChhbnMgYXMgUmV0dXJuT2JqKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7TmF0aXZlfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zL05hdGl2ZVwiO1xyXG5pbXBvcnQge0Z1bmN0aW9uUmVwcmVzZW50fSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zL0Z1bmN0aW9uUmVwcmVzZW50XCI7XHJcbmltcG9ydCB7UmV0dXJuT2JqfSBmcm9tIFwiLi9SZXR1cm5PYmpcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVPYmpWYXJOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXR0cjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBPcCwgYXR0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5hdHRyID0gYXR0cjtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5pZC5FeGUoZW52KSBhcyBDbnRucjtcclxuICAgICAgICBpZiAoIShpZCBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKFwiTGxhbWFkYSBhIE9iamV0byBubyBkZWZpbmlkb1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZWYgPSAoaWQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIGxldCBlID0gcmVmLkdldFByb3BlcnR5KHRoaXMuYXR0cik7XHJcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBGdW5jdGlvblJlcHJlc2VudCkge1xyXG4gICAgICAgICAgICBsZXQgYW5zID0gZS5FWEUoZW52LCBuZXcgQXJyYXk8Q250bnI+KCkpO1xyXG4gICAgICAgICAgICBpZiAoYW5zIGluc3RhbmNlb2YgUmV0dXJuT2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFucyBhcyBSZXR1cm5PYmopLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZWYuR2V0UHJvcGVydHkodGhpcy5hdHRyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0RlY2xhcmVWYXJOb2RlfSBmcm9tIFwiLi9EZWNsYXJlVmFyTm9kZVwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVjbGFyZVZhckxpc3ROb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aXBvTm9tYnJlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVjbGFyYXRpb25PcHM6IEFycmF5PE9wPjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNDb25zdDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXBvTm9tYnJlOiBzdHJpbmcsIGRlY2xhcmF0aW9uT3BzOiBBcnJheTxPcD4sIHZhbHVlPzogT3AsIGlzQ29uc3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50aXBvTm9tYnJlID0gdGlwb05vbWJyZTtcclxuICAgICAgICB0aGlzLmRlY2xhcmF0aW9uT3BzID0gZGVjbGFyYXRpb25PcHM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NvbnN0ID0gaXNDb25zdDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgZm9yIChsZXQgb3Agb2YgdGhpcy5kZWNsYXJhdGlvbk9wcykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAob3AgYXMgRGVjbGFyZVZhck5vZGUpLkFkZFZhbHVlKHRoaXMudmFsdWUuRXhlKGVudikgYXMgQ250bnIsIHRoaXMuaXNDb25zdCwgdGhpcy50aXBvTm9tYnJlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIChvcCBhcyBEZWNsYXJlVmFyTm9kZSkuQWRkVmFsdWUobmV3IFVOREVGSU5FRCgpLCB0aGlzLmlzQ29uc3QsIHRoaXMudGlwb05vbWJyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcC5FeGUoZW52KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhlbnYpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9wIH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gJy4uL3V0aWxzL0NudG5yJztcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVjbGFyZVZhck5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTogQ250bnIgPSBuZXcgVU5ERUZJTkVEKCk7XHJcbiAgICBwcml2YXRlIGlzQ29uc3Q6Ym9vbGVhbjtcclxuICAgIHByaXZhdGUgdGlwb05vbWJyZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCkgOiBvYmplY3Qge1xyXG4gICAgICAgIHRoaXMuQWRkVmFyT25EZWNsYXJlKGVudiwgdGhpcy5uYW1lKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkVmFsdWUodmFsdWU6IENudG5yID0gbmV3IFVOREVGSU5FRCgpLCBpc0NvbnN0OiBib29sZWFuID0gZmFsc2UsIHRpcG9Ob21icmU6IHN0cmluZyA9ICdBTlknKXtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5pc0NvbnN0ID0gaXNDb25zdDtcclxuICAgICAgICBpZih0aXBvTm9tYnJlID09PSAnJyl7XHJcbiAgICAgICAgICAgIHRpcG9Ob21icmUgPSAnQU5ZJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aXBvTm9tYnJlID0gdGlwb05vbWJyZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQWRkVmFyT25EZWNsYXJlKGVudjogRW52bW50LCBpZGVudGlmaWVyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogQ250bnIgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZTogUmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZSh0aGlzLnRpcG9Ob21icmUsIHRoaXMuaXNDb25zdCk7XHJcbiAgICAgICAgcmVmZXJlbmNlLlB1dFZhbHVlT25SZWZlcmVuY2UodmFsdWUpO1xyXG4gICAgICAgIGVudi5EZWNsYXJlKGlkZW50aWZpZXIsIHJlZmVyZW5jZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RGlmZXJlbnRlfSBmcm9tIFwiLi4vdXRpbHMvUmVsYXRpb25hbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlmTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBEaWZlcmVudGUoKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIpLCAodGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucikpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0RpdmlzaW9uLCBTdW1hfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXZOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gRGl2aXNpb24oKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIpLCAodGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucikpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TG9naWNEb1doaWxlfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb1doaWxlTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZGl0aW9uOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VudGVuY2VzOiBBcnJheTxPcD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBPcCwgc2VudGVuY2VzOiBBcnJheTxPcD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMuc2VudGVuY2VzID0gc2VudGVuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gTG9naWNEb1doaWxlKGVudiwgdGhpcy5jb25kaXRpb24sIHRoaXMuc2VudGVuY2VzLCBudWxsKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0lndWFsfSBmcm9tIFwiLi4vdXRpbHMvUmVsYXRpb25hbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXFOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIElndWFsKCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKSwgKHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtQb3RlbmNpYX0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBQb3RlbmNpYSgodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciksICh0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TWF5b3JFcX0gZnJvbSBcIi4uL3V0aWxzL1JlbGF0aW9uYWxPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhpZ2hlckVxTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBNYXlvckVxKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIsIHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TWF5b3J9IGZyb20gXCIuLi91dGlscy9SZWxhdGlvbmFsT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIaWdoZXJOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIE1heW9yKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIsIHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Qk9PTEVBTn0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtQYXNzUHJvcHNBbmRGdW5jcywgU2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElmTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb246IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcGVyYXRpb25zVHJ1ZTogQXJyYXk8T3A+O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcGVyYXRpb25zRmFsc2U6IEFycmF5PE9wPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IE9wLCBvcGVyYXRpb25zVHJ1ZTogQXJyYXk8T3A+LCBvcGVyYXRpb25zRmFsc2U6IEFycmF5PE9wPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zVHJ1ZSA9IG9wZXJhdGlvbnNUcnVlO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uc0ZhbHNlID0gb3BlcmF0aW9uc0ZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBsZXQgY29uZGl0aW9uID0gdGhpcy5jb25kaXRpb24uRXhlKGVudik7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBjb25kaXRpb24gPSAoY29uZGl0aW9uIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIShjb25kaXRpb24gaW5zdGFuY2VvZiBCT09MRUFOKSl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIkNvbmRpY2lvbiB1dGlsaXphZGEgY29tbyBwYXJhbWV0cm8gbm8gc29wb3J0YWRhIHBvciBzZW50ZW5jaWEgSWZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uZGl0aW9uLmdldFZhbHVlKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZW52VHJ1ZSA9IG5ldyBFbnZtbnQoZW52LCB0aGlzLm9wZXJhdGlvbnNUcnVlKTtcclxuICAgICAgICAgICAgUGFzc1Byb3BzQW5kRnVuY3MoZW52LCBlbnZUcnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVudlRydWUuR09fQUxMKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbnZGYWxzZSA9IG5ldyBFbnZtbnQoZW52LCB0aGlzLm9wZXJhdGlvbnNGYWxzZSk7XHJcbiAgICAgICAgUGFzc1Byb3BzQW5kRnVuY3MoZW52LCBlbnZGYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIGVudkZhbHNlLkdPX0FMTCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TWVub3JFcX0gZnJvbSBcIi4uL3V0aWxzL1JlbGF0aW9uYWxPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbm9yRXFOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIE1lbm9yRXEodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciwgdGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7IEVudm1udCB9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtNZW5vcn0gZnJvbSBcIi4uL3V0aWxzL1JlbGF0aW9uYWxPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbm9yTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBNZW5vcih0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yLCB0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge01vZHVsb30gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIE1vZHVsbygodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciksICh0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtNdWx0aXBsaWNhY2lvbn0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTXVsTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIE11bHRpcGxpY2FjaW9uKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIsIHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge05vdH0gZnJvbSBcIi4uL3V0aWxzL0xvZ2ljYWxPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vdE5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gTm90KHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge05VTEx9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTnVsbE5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5VTEwoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge05VTUJFUn0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVyTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWw6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWw6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpe1xyXG4gICAgICAgIHJldHVybiBuZXcgTlVNQkVSKHRoaXMudmFsKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge09yfSBmcm9tIFwiLi4vdXRpbHMvTG9naWNhbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT3JOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIE9yKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIsIHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0FkZH0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVBZGROb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBBZGQodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDbnRuciwgRW52bW50LCBPcCwgUmVmZXJlbmNlfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7U3VtYX0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZUFzaWduQWRkTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGxmID0gdGhpcy5sZi5FeGUoZW52KTtcclxuICAgICAgICBjb25zdCBydCA9IHRoaXMucnQuRXhlKGVudik7XHJcblxyXG4gICAgICAgIGlmICghKGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE5vIHNlIHB1ZWRlIGFzaWdhbnIgYSAke2xmfSwgbGFzIGFzaWduYWNpb25lcyBzb2xvIHB1ZWRlbiBzZXIgc29icmUgdW5hIHJlZmVyZW5jaWFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChsZiBhcyBSZWZlcmVuY2UpLlB1dFZhbHVlT25SZWZlcmVuY2UoXHJcbiAgICAgICAgICAgIFN1bWEoKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSwgcnQgYXMgQ250bnIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7RGl2aXNpb259IGZyb20gXCIuLi91dGlscy9BbGdlYnJhaWNPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlQXNpZ25EaXZOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgbGYgPSB0aGlzLmxmLkV4ZShlbnYpO1xyXG4gICAgICAgIGNvbnN0IHJ0ID0gdGhpcy5ydC5FeGUoZW52KTtcclxuXHJcbiAgICAgICAgaWYgKCEobGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgTm8gc2UgcHVlZGUgYXNpZ2FuciBhICR7bGZ9LCBsYXMgYXNpZ25hY2lvbmVzIHNvbG8gcHVlZGVuIHNlciBzb2JyZSB1bmEgcmVmZXJlbmNpYWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGxmIGFzIFJlZmVyZW5jZSkuUHV0VmFsdWVPblJlZmVyZW5jZShcclxuICAgICAgICAgICAgRGl2aXNpb24oKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSwgcnQgYXMgQ250bnIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7TW9kdWxvfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZUFzaWduTW9kTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGxmID0gdGhpcy5sZi5FeGUoZW52KTtcclxuICAgICAgICBjb25zdCBydCA9IHRoaXMucnQuRXhlKGVudik7XHJcblxyXG4gICAgICAgIGlmICghKGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE5vIHNlIHB1ZWRlIGFzaWdhbnIgYSAke2xmfSwgbGFzIGFzaWduYWNpb25lcyBzb2xvIHB1ZWRlbiBzZXIgc29icmUgdW5hIHJlZmVyZW5jaWFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChsZiBhcyBSZWZlcmVuY2UpLlB1dFZhbHVlT25SZWZlcmVuY2UoXHJcbiAgICAgICAgICAgIE1vZHVsbygobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpLCBydCBhcyBDbnRucilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtNdWx0aXBsaWNhY2lvbn0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVBc2lnbk11bE5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBjb25zdCBsZiA9IHRoaXMubGYuRXhlKGVudik7XHJcbiAgICAgICAgY29uc3QgcnQgPSB0aGlzLnJ0LkV4ZShlbnYpO1xyXG5cclxuICAgICAgICBpZiAoIShsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBObyBzZSBwdWVkZSBhc2lnYW5yIGEgJHtsZn0sIGxhcyBhc2lnbmFjaW9uZXMgc29sbyBwdWVkZW4gc2VyIHNvYnJlIHVuYSByZWZlcmVuY2lhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAobGYgYXMgUmVmZXJlbmNlKS5QdXRWYWx1ZU9uUmVmZXJlbmNlKFxyXG4gICAgICAgICAgICBNdWx0aXBsaWNhY2lvbigobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpLCBydCBhcyBDbnRucilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtSZXN0YX0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVBc2lnblN1Yk5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBjb25zdCBsZiA9IHRoaXMubGYuRXhlKGVudik7XHJcbiAgICAgICAgY29uc3QgcnQgPSB0aGlzLnJ0LkV4ZShlbnYpO1xyXG5cclxuICAgICAgICBpZiAoIShsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBObyBzZSBwdWVkZSBhc2lnYW5yIGEgJHtsZn0sIGxhcyBhc2lnbmFjaW9uZXMgc29sbyBwdWVkZW4gc2VyIHNvYnJlIHVuYSByZWZlcmVuY2lhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAobGYgYXMgUmVmZXJlbmNlKS5QdXRWYWx1ZU9uUmVmZXJlbmNlKFxyXG4gICAgICAgICAgICBSZXN0YSgobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpLCBydCBhcyBDbnRucilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1N1Yn0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVTdWJOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBTdWIodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0dXJuT2JqIGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZXR1cm5uOiBDbnRucjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZXR1cm5uOiBDbnRucikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZXR1cm5uID0gcmV0dXJubjtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIm1pIG9iamV0byByZXR1cm4gKFJldHVybk9iailcIjtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlKCk6IENudG5yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7Qk9PTEVBTn0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VudGVuY2VUZXJuYXJ5Tm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaWNpb246IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cnVlU2VudGVuY2U6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYWxzZVNlbnRlbmNlOiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IE9wLCB0cnVlU2VudGVuY2U6IE9wLCBmYWxzZVNlbnRlbmNlOiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaWNpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy50cnVlU2VudGVuY2UgPSB0cnVlU2VudGVuY2U7XHJcbiAgICAgICAgdGhpcy5mYWxzZVNlbnRlbmNlID0gZmFsc2VTZW50ZW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IGFucyA9IHRoaXMuY29uZGljaW9uLkV4ZShlbnYpO1xyXG4gICAgICAgIGlmIChhbnMgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgYW5zID0gKGFucyBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShhbnMgaW5zdGFuY2VvZiBCT09MRUFOKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJDb25kaWNpb24gdXRpbGl6YWRhIGNvbiBwYXJhbWV0cm8gbm8gc29wb3J0YWRhIHBvciBvcGVyYWRvciB0ZXJuYXJpb1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoYW5zIGFzIEJPT0xFQU4pLmdldFZhbHVlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJ1ZVNlbnRlbmNlLkV4ZShlbnYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5mYWxzZVNlbnRlbmNlLkV4ZShlbnYpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7U1RSSU5HfSBmcm9tIFwiLi4vdXRpbHMvUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ05vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTVFJJTkcodGhpcy52YWwuc3Vic3RyaW5nKDEsIHRoaXMudmFsLmxlbmd0aCAtIDEpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZXN0YX0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ViTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBSZXN0YSgodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciksICh0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtTdW1hfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdW1Ob2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIFN1bWEoKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIpLCAodGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucikpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5kZWZpbmVkTm9kZSBleHRlbmRzIE9we1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVU5ERUZJTkVEKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TG9naWNXaGlsZX0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2hpbGVOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb246IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZW50ZW5jZXM6IEFycmF5PE9wPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IE9wLCBzZW50ZW5jZXM6IEFycmF5PE9wPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5zZW50ZW5jZXMgPSBzZW50ZW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBMb2dpY1doaWxlKGVudiwgdGhpcy5jb25kaXRpb24sIHRoaXMuc2VudGVuY2VzLCBudWxsKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4vUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7U2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7Qk9PTEVBTiwgTkFOLCBOVUxMLCBOVU1CRVIsIFNUUklORywgVU5ERUZJTkVEfSBmcm9tIFwiLi9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3VtYShsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIFN1bWFyKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99ICsgJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFN1bWFyKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgKyAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTVFJJTkcoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSArIChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICsgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICsgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIFNUUklORykuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNUUklORygobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgKyAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTVFJJTkcoKGxmIGFzIFNUUklORykuZ2V0VmFsdWUoKSArIChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBVTkRFRklORUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgKyAocnQgYXMgVU5ERUZJTkVEKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgKyAocnQgYXMgTlVMTCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTVFJJTkcoKGxmIGFzIFVOREVGSU5FRCkgKyAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNUUklORygobGYgYXMgTlVMTCkgKyAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc3RhKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gUmVzdGFyKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IC0gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJlc3RhcihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAtIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpIC0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIC0gKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIC0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlwbGljYWNpb24obGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBNdWx0aXBsaWNhcihsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSAqICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNdWx0aXBsaWNhcihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAqIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICogKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICogKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICogKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGl2aXNpb24obGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICBpZihydCBpbnN0YW5jZW9mIE5VTUJFUil7XHJcbiAgICAgICAgaWYoKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbignT3BlcmFjacOzbiBubyB2w6FsaWRhLCBubyBzZSBwdWVkZSBkaXZpZGlyIGVudHJlIDAnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYocnQgaW5zdGFuY2VvZiBCT09MRUFOKXtcclxuICAgICAgICBpZigocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbignT3BlcmFjacOzbiBubyB2w6FsaWRhLCBubyBzZSBwdWVkZSBkaXZpZGlyIGVudHJlIDAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBEaXZpZGlyKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IC8gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERpdmlkaXIobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgLyAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAvIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAvIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAvIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vZHVsbyhsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIE1vZChsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSAlICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNb2QobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgJSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAlIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAlIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAlIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvdGVuY2lhKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gUG90KGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IF4gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFBvdChsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoTWF0aC5wb3coKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSwgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUihNYXRoLnBvdygobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpLCAgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUihNYXRoLnBvdygobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSwgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUihNYXRoLnBvdygobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSwgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChsZjogQ250bnIpOiBDbnRuciB7XHJcbiAgICBpZiAoIShsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJPcGVyYWNpb24ge3JlZisrfSBwZXJtaXRpZGEgc29sYW1lbnRlIHNvYnJlIHJlZmVyZW5jYXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBOVU1CRVIpIHtcclxuICAgICAgICAobGYgYXMgUmVmZXJlbmNlKS5zZXRWYWx1ZShuZXcgTlVNQkVSKCh2YWwgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICsgMSkpO1xyXG4gICAgICAgIHJldHVybiB2YWwgYXMgTlVNQkVSO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIk9wZXJhY2lvbiB7cmVmKyt9IE5vIHNlIHB1ZWRlIHJlYWxpemFyIHNvYnJlIHZhcmlhYmxlcyBkaXN0aW50YXMgZGUgdGlwbyBudW1iZXJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWIobGY6IENudG5yKTogQ250bnIge1xyXG4gICAgaWYgKCEobGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKFwiT3BlcmFjaW9uIHtyZWYtLX0gcGVybWl0aWRhIHNvbGFtZW50ZSBzb2JyZSByZWZlcmVuY2FzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbCA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgTlVNQkVSKSB7XHJcbiAgICAgICAgKGxmIGFzIFJlZmVyZW5jZSkuc2V0VmFsdWUobmV3IE5VTUJFUigodmFsIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAtIDEpKTtcclxuICAgICAgICByZXR1cm4gdmFsIGFzIE5VTUJFUjtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJPcGVyYWNpb24ge3JlZi0tfSBObyBzZSBwdWVkZSByZWFsaXphciBzb2JyZSB2YXJpYWJsZXMgZGlzdGludGFzIGRlIHRpcG8gbnVtYmVyXCIpO1xyXG59XHJcbiIsImltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbnRuciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG93bmVyOiBDbnRucjtcclxuICAgIHB1YmxpYyByZWFkb25seSBwcm9wcyA9IG5ldyBNYXA8c3RyaW5nLCBDbnRucj4oKTtcclxuICAgIHB1YmxpYyB0eXBvOiBzdHJpbmc7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG93bmVyPzogQ250bnIpIHtcclxuICAgICAgICB0aGlzLm93bmVyID0gb3duZXIgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQXNPYmplY3RQcm9wcygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBhbnMgPSBcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCI7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGFucyArPSBrICsgJyA9PiAnICsgdiArICdcXG4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFucyArPSBcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCI7XHJcbiAgICAgICAgcmV0dXJuIGFucztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkUHJvcGVydHkoaWQ6IHN0cmluZywgY250bnI6IENudG5yKTogdm9pZCB7XHJcbiAgICAgICAgaWQgPSBpZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0KGlkLCBjbnRucik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFByb3BlcnR5KGlkOiBzdHJpbmcpOiBDbnRuciB7XHJcbiAgICAgICAgaWQgPSBpZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMucHJvcHMuZ2V0KGlkKTtcclxuICAgICAgICBpZiAodmFsICE9PSBudWxsICYmIHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMucHJvcHMuc2V0KGlkLCBuZXcgUmVmZXJlbmNlKCkpO1xyXG4gICAgICAgIC8vcmV0dXJuIHRoaXMucHJvcHMuZ2V0KGlkKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBEZWNsYXJlKGlkOiBzdHJpbmcsIGNudG5yOiBDbnRucik6IHZvaWQge1xyXG4gICAgICAgIGlkID0gaWQudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB0aGlzLnByb3BzLnNldChpZCwgY250bnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUeXBvKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwb1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRUeXBvKHR5cG86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHlwbyA9IHR5cG87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldE93bmVyKCk6IENudG5yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vd25lcjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29uc29sZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZzogc3RyaW5nID0gJyc7XHJcbn0iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge09wfSBmcm9tIFwiLi9PcFwiO1xyXG5pbXBvcnQge0JyZWFrT2JqfSBmcm9tIFwiLi4vbm9kZXMvQnJlYWtPYmpcIjtcclxuaW1wb3J0IHtSZXR1cm5PYmp9IGZyb20gXCIuLi9ub2Rlcy9SZXR1cm5PYmpcIjtcclxuaW1wb3J0IHtDb250aW51ZU9ian0gZnJvbSBcIi4uL25vZGVzL0NvbnRpbnVlT2JqXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW52bW50IGV4dGVuZHMgQ250bnJ7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRXh0cmEgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcGVyYXRpb25zOiBBcnJheTxPcD47XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3duZXI6IENudG5yLCBvcGVyYXRpb25zOiBBcnJheTxPcD4pe1xyXG4gICAgICAgIHN1cGVyKG93bmVyKTtcclxuICAgICAgICB0aGlzLm9wZXJhdGlvbnMgPSBvcGVyYXRpb25zO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IFwiQW1iaXRvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdPX0FMTCgpOiBDbnRucntcclxuICAgICAgICBmb3IobGV0IG9wIG9mIHRoaXMub3BlcmF0aW9ucyl7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBvcC5FeGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQgaW5zdGFuY2VvZiBCcmVha09iaiB8fCByZXN1bHQgaW5zdGFuY2VvZiBSZXR1cm5PYmogfHwgcmVzdWx0IGluc3RhbmNlb2YgQ29udGludWVPYmope1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0IGFzIENudG5yO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q250bnJ9IGZyb20gXCIuL0NudG5yXCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHtCT09MRUFOLCBOQU4sIE5VTEwsIE5VTUJFUiwgU1RSSU5HLCBVTkRFRklORUR9IGZyb20gXCIuL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPcihsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG9yKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IHx8ICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3IobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZSgpIHx8IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFuZChsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGFuZChsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSAmJiAke3J0LnR5cG99ICkgbm8gcGVybWl0aWRhLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFuZChsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlKCkgJiYgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTm90KGxmOiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gbm90KGxmKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICEgJHtsZi50eXBvfSApIG5vIHBlcm1pdGlkYS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBub3QobGY6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oIShsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0Vudm1udH0gZnJvbSBcIi4vRW52bW50XCI7XHJcbmltcG9ydCB7RXJyb3JDb21wb30gZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPcCB7XHJcbiAgICBwdWJsaWMgRXhlKGVudjogRW52bW50KTogb2JqZWN0e1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuR08oZW52KTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yQ29tcG8oZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IEdPKGVudjogRW52bW50KTogb2JqZWN0O1xyXG59IiwiaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4vQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge0xlbmd0aH0gZnJvbSBcIi4vbmF0aXZlRnVuY3Rpb25zL2xlbmd0aFwiO1xyXG5pbXBvcnQge1B1c2h9IGZyb20gXCIuL25hdGl2ZUZ1bmN0aW9ucy9wdXNoXCI7XHJcbmltcG9ydCB7UG9wfSBmcm9tIFwiLi9uYXRpdmVGdW5jdGlvbnMvcG9wXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQk9PTEVBTiBleHRlbmRzIENudG5yIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy50eXBvID0gXCJCT09MRUFOXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlTnVtYmVyID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPyAxIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU1RSSU5HIGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJyc7XHJcbiAgICAgICAgdGhpcy50eXBvID0gXCJTVFJJTkdcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTlVNQkVSIGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgMDtcclxuICAgICAgICB0aGlzLnR5cG8gPSBcIk5VTUJFUlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICsgJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXRWYWx1ZSA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVOREVGSU5FRCBleHRlbmRzIENudG5yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50eXBvID0gXCJVTkRFRklORURcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gXCJ1bmRlZmluZWRcIjtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOQU4gZXh0ZW5kcyBDbnRuciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IFwiTkFOXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiTmFOXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOVUxMIGV4dGVuZHMgQ250bnIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnR5cG8gPSBcIk5VTExcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlID0gKCk6IG9iamVjdCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQVJSQVkgZXh0ZW5kcyBDbnRuciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBBcnJheTxDbnRucj47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRlbnRUeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBBcnJheTxDbnRucj4sIGNvbnRlbnRUeXBlOiBzdHJpbmcgPSAnQU5ZJykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IG5ldyBBcnJheTxDbnRucj4oKTtcclxuICAgICAgICB0aGlzLnR5cG8gPSBgQVJSQVlgO1xyXG4gICAgICAgIHRoaXMuY29udGVudFR5cGUgPSBjb250ZW50VHlwZTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHRoaXMuRGVjbGFyZShcImxlbmd0aFwiLCBuZXcgTGVuZ3RoKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5EZWNsYXJlKFwicHVzaFwiLCBuZXcgUHVzaCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuRGVjbGFyZShcInBvcFwiLCBuZXcgUG9wKHRoaXMpKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnZhbHVlLmxlbmd0aDtcclxuICAgICAgICBsZXQgbG9nID0gYEFycmF5ICgke3NpemV9KSBbYDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBsb2cgKz0gYCR7KHRoaXMudmFsdWVbaV0gYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpfWA7XHJcbiAgICAgICAgICAgIGlmIChzaXplIC0gMSAhPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgbG9nICs9ICcsICc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nICs9ICddJztcclxuICAgICAgICByZXR1cm4gbG9nO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUgPSAoaW5kZXg6IG51bWJlcik6IG9iamVjdCA9PiB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMudmFsdWVbaW5kZXhdO1xyXG4gICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMudmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChzaXplIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUucHVzaChuZXcgUmVmZXJlbmNlKCkpO1xyXG4gICAgICAgICAgICBzaXplKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlW2luZGV4XTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGFkZFZhbHVlKHZhbHVlOiBDbnRucikge1xyXG4gICAgICAgIHRoaXMudmFsdWUucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlTGlzdCA9ICgpOiBBcnJheTxDbnRucj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge0RlZmF1bHRWYWx1ZSwgU2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7VU5ERUZJTkVEfSBmcm9tIFwiLi9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTogQ250bnI7XHJcbiAgICBwcml2YXRlIGlzQ29uc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdGlwb05vbWJyZTogc3RyaW5nID0gJ2FueSc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGlwb05vbWJyZTogc3RyaW5nID0gJ0FOWScsIGlzQ29uc3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50eXBvID0gXCJSRUZFUkVOQ0VcIjtcclxuICAgICAgICB0aGlzLnZhbHVlID0gRGVmYXVsdFZhbHVlKHRpcG9Ob21icmUpO1xyXG4gICAgICAgIHRoaXMudGlwb05vbWJyZSA9IHRpcG9Ob21icmU7XHJcbiAgICAgICAgdGhpcy5pc0NvbnN0ID0gaXNDb25zdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVmZXJlbmNlVmFsdWUgPSAoKSA6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlwb05vbWJyZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgUHV0VmFsdWVPblJlZmVyZW5jZSh2YWx1ZTogQ250bnIpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmlzQ29uc3QgJiYgISh0aGlzLnZhbHVlIGluc3RhbmNlb2YgVU5ERUZJTkVEKSl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbignTm8gc2UgcHVlZGUgY2FtYmlhciBlbCB2YWxvciBkZSB1bmEgY29uc3RhbnRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdjogQ250bnI7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIHYgPSAodmFsdWUgYXMgUmVmZXJlbmNlKS52YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudGlwb05vbWJyZSAhPT0gdi50eXBvXHJcbiAgICAgICAgICAgICYmIHRoaXMudGlwb05vbWJyZSAhPT0gJ0FOWSdcclxuICAgICAgICAgICAgJiYgdi50eXBvICE9PSAnTlVMTCdcclxuICAgICAgICAgICAgJiYgdi50eXBvICE9PSAnVU5ERUZJTkVEJ1xyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgVGlwbyAke3YudHlwb30gbm8gcHVlZGUgc2VyIGFzaWduYWRvIGEgVmFyaWFibGUgZGUgdGlwbyAke3RoaXMudGlwb05vbWJyZX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbHVlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUgPSAoKTogQ250bnIgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc2V0VmFsdWUgPSAodmFsdWU6IENudG5yKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgQ2FsbCA9IChhcmdzOiBBcnJheTxDbnRucj4pOiBvYmplY3QgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4vUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7U2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7Qk9PTEVBTiwgTkFOLCBOVUxMLCBOVU1CRVIsIFNUUklORywgVU5ERUZJTkVEfSBmcm9tIFwiLi9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSWd1YWwobGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBFcShsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSA9PSAke3J0LnR5cG99ICkgbm8gcGVybWl0aWRhLmApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRXEobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpID09PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPT09IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpID09IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPT0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBVTkRFRklORUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpID09PSAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBVTkRFRklORUQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEaWZlcmVudGUobGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBEaWYobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gPT0gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERpZihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgIT09IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAhPT0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgIT0gKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAhPSAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgIT09IChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF5b3IobGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBNYXkobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gPiAke3J0LnR5cG99ICkgbm8gcGVybWl0aWRhLmApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTWF5KGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA+IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA+IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSA+IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPiAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIFNUUklORykuZ2V0VmFsdWUoKSA+IChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lbm9yKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gTWluKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IDwgJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1pbihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPCAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPCAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPCAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIDwgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgPCAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXlvckVxKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gTWF5RXEobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gPj0gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1heUVxKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA+PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPj0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpID49IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPj0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgPj0gKHJ0IGFzIFNUUklORykuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVub3JFcShsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIE1pbkVxKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99ID49ICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNaW5FcShsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPD0gKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpIDw9IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSA8PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIDw9IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpIDw9IChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0JPT0xFQU4sIE5VTEwsIFVOREVGSU5FRH0gZnJvbSBcIi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4vRW52bW50XCI7XHJcbmltcG9ydCB7T3B9IGZyb20gXCIuL09wXCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtCcmVha09ian0gZnJvbSBcIi4uL25vZGVzL0JyZWFrT2JqXCI7XHJcbmltcG9ydCB7UmV0dXJuT2JqfSBmcm9tIFwiLi4vbm9kZXMvUmV0dXJuT2JqXCI7XHJcbmltcG9ydCB7Q29udGludWVPYmp9IGZyb20gXCIuLi9ub2Rlcy9Db250aW51ZU9ialwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbWFudGljRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JDb21wbyBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlZmF1bHRWYWx1ZSh0eXBvOiBzdHJpbmcpOiBDbnRuciB7XHJcbiAgICBzd2l0Y2ggKHR5cG8udG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgXCJOVUxMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTlVMTCgpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVU5ERUZJTkVEKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGaW5kVmFyKGNvbnQ6IENudG5yLCBpZGVudGlmaWVyOiBzdHJpbmcpOiBDbnRuciB7XHJcbiAgICBsZXQgb3duZXJDbnRuciA9IGNvbnQ7XHJcblxyXG4gICAgd2hpbGUgKG93bmVyQ250bnIgIT0gbnVsbCl7XHJcbiAgICAgICAgaWYob3duZXJDbnRuci5HZXRQcm9wZXJ0eShpZGVudGlmaWVyKSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIG93bmVyQ250bnIuR2V0UHJvcGVydHkoaWRlbnRpZmllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG93bmVyQ250bnIgPSBvd25lckNudG5yLkdldE93bmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgIG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgaWRlbnRpZmljYWRvciAke2lkZW50aWZpZXJ9IG5vIGVuY29udHJhZG9gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhc3NQcm9wc0FuZEZ1bmNzKGZhdGhlcjogRW52bW50LCBzb246IEVudm1udCkge1xyXG4gICAgLy8gZmF0aGVyLnByb3BzLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgIC8vICAgICBzb24uRGVjbGFyZShrLCB2KTtcclxuICAgIC8vIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naWNXaGlsZShlbnY6IEVudm1udCwgY29uZGl0aW9uOiBPcCwgc2VudGVuY2VzOiBBcnJheTxPcD4sIGV4dHJhOiBPcCkge1xyXG4gICAgbGV0IGFucyA9IGNvbmRpdGlvbi5FeGUoZW52KTtcclxuICAgIGlmIChhbnMgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICBhbnMgPSAoYW5zIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShhbnMgaW5zdGFuY2VvZiBCT09MRUFOKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIkNvbmRpY2lvbiB1dGlsaXphZGEgZW4gY2ljbG8gd2hpbGUgbm8gc29wb3J0YWRhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0bXAgPSBhbnMgYXMgQk9PTEVBTjtcclxuICAgIHdoaWxlICh0bXAuZ2V0VmFsdWUoKSkge1xyXG4gICAgICAgIGNvbnN0IGVudjAgPSBuZXcgRW52bW50KGVudiwgc2VudGVuY2VzKTtcclxuICAgICAgICBQYXNzUHJvcHNBbmRGdW5jcyhlbnYsIGVudjApO1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGVudjAuR09fQUxMKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXQgaW5zdGFuY2VvZiBCcmVha09iaikge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJldCBpbnN0YW5jZW9mIFJldHVybk9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyZXQgaW5zdGFuY2VvZiBDb250aW51ZU9iail7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV4dHJhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGV4dHJhLkV4ZShlbnYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFuczAgPSBjb25kaXRpb24uRXhlKGVudik7XHJcbiAgICAgICAgaWYgKGFuczAgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgYW5zMCA9IChhbnMwIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG1wID0gYW5zMCBhcyBCT09MRUFOO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpY0RvV2hpbGUoZW52OiBFbnZtbnQsIGNvbmRpdGlvbjogT3AsIHNlbnRlbmNlczogQXJyYXk8T3A+LCBleHRyYTogT3ApIHtcclxuICAgIGxldCBhbnMgPSBjb25kaXRpb24uRXhlKGVudik7XHJcbiAgICBpZiAoYW5zIGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgYW5zID0gKGFucyBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEoYW5zIGluc3RhbmNlb2YgQk9PTEVBTikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJDb25kaWNpb24gdXRpbGl6YWRhIGVuIGNpY2xvIHdoaWxlIG5vIHNvcG9ydGFkYVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZW52MCA9IG5ldyBFbnZtbnQoZW52LCBzZW50ZW5jZXMpO1xyXG4gICAgUGFzc1Byb3BzQW5kRnVuY3MoZW52LCBlbnYwKTtcclxuICAgIGVudjAuR09fQUxMKCk7XHJcblxyXG4gICAgbGV0IGFuczAgPSBjb25kaXRpb24uRXhlKGVudik7XHJcbiAgICBpZiAoYW5zMCBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgIGFuczAgPSAoYW5zMCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgdG1wID0gYW5zMCBhcyBCT09MRUFOO1xyXG5cclxuICAgIHdoaWxlICh0bXAuZ2V0VmFsdWUoKSkge1xyXG4gICAgICAgIGNvbnN0IGVudjAgPSBuZXcgRW52bW50KGVudiwgc2VudGVuY2VzKTtcclxuICAgICAgICBQYXNzUHJvcHNBbmRGdW5jcyhlbnYsIGVudjApO1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGVudjAuR09fQUxMKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXQgaW5zdGFuY2VvZiBCcmVha09iaikge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJldCBpbnN0YW5jZW9mIFJldHVybk9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyZXQgaW5zdGFuY2VvZiBDb250aW51ZU9iail7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV4dHJhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGV4dHJhLkV4ZShlbnYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFuczAgPSBjb25kaXRpb24uRXhlKGVudik7XHJcbiAgICAgICAgaWYgKGFuczAgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgYW5zMCA9IChhbnMwIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG1wID0gYW5zMCBhcyBCT09MRUFOO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn0iLCJpbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vQ250bnJcIjtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRnVuY3Rpb25SZXByZXNlbnQgZXh0ZW5kcyBDbnRucntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBFWEUoZW52MDogRW52bW50LCBhcmdzOiBBcnJheTxDbnRucj4pOiBDbnRucjtcclxufSIsImltcG9ydCB7RnVuY3Rpb25SZXByZXNlbnR9IGZyb20gXCIuL0Z1bmN0aW9uUmVwcmVzZW50XCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmF0aXZlIGV4dGVuZHMgRnVuY3Rpb25SZXByZXNlbnR7XHJcblxyXG59IiwiaW1wb3J0IHtOYXRpdmV9IGZyb20gXCIuLi9mdW5jdGlvbnMvTmF0aXZlXCI7XHJcbmltcG9ydCB7QVJSQVksIE5VTUJFUn0gZnJvbSBcIi4uL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi9FbnZtbnRcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL0NudG5yXCI7XHJcbmltcG9ydCB7UmV0dXJuT2JqfSBmcm9tIFwiLi4vLi4vbm9kZXMvUmV0dXJuT2JqXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGVuZ3RoIGV4dGVuZHMgTmF0aXZle1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcnJheTogQVJSQVk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJyYXk6IEFSUkFZKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgRVhFKGVudjA6IEVudm1udCwgYXJnczogQXJyYXk8Q250bnI+KTogQ250bnIge1xyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy5hcnJheS5nZXRWYWx1ZUxpc3QoKS5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXR1cm5PYmoobmV3IE5VTUJFUihzaXplKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge05hdGl2ZX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9OYXRpdmVcIjtcclxuaW1wb3J0IHtBUlJBWSwgVU5ERUZJTkVEfSBmcm9tIFwiLi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vQ250bnJcIjtcclxuaW1wb3J0IHtSZXR1cm5PYmp9IGZyb20gXCIuLi8uLi9ub2Rlcy9SZXR1cm5PYmpcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3AgZXh0ZW5kcyBOYXRpdmV7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFycmF5OiBBUlJBWTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhcnJheTogQVJSQVkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBFWEUoZW52MDogRW52bW50LCBhcmdzOiBBcnJheTxDbnRucj4pOiBDbnRuciB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5hcnJheS5nZXRWYWx1ZUxpc3QoKS5wb3AoKTtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJldHVybk9iaihuZXcgVU5ERUZJTkVEKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJldHVybk9iaih2YWx1ZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge05hdGl2ZX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9OYXRpdmVcIjtcclxuaW1wb3J0IHtBUlJBWSwgTlVNQkVSfSBmcm9tIFwiLi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vQ250bnJcIjtcclxuaW1wb3J0IHtSZXR1cm5PYmp9IGZyb20gXCIuLi8uLi9ub2Rlcy9SZXR1cm5PYmpcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaCBleHRlbmRzIE5hdGl2ZXtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXJyYXk6IEFSUkFZO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFycmF5OiBBUlJBWSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIEVYRShlbnYwOiBFbnZtbnQsIGFyZ3M6IEFycmF5PENudG5yPik6IENudG5yIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuYXJyYXkuZ2V0VmFsdWVMaXN0KCkubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJncykge1xyXG4gICAgICAgICAgICBsZXQgcmVmID0gbmV3IFJlZmVyZW5jZSgpO1xyXG4gICAgICAgICAgICByZWYuc2V0VmFsdWUoYXJnc1tpXSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYXkuYWRkVmFsdWUocmVmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXR1cm5PYmoobmV3IE5VTUJFUihzaXplKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9