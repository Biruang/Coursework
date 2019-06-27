(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		18: function(e, t, a) {},
		36: function(e, t, a) {
			e.exports = a(58);
		},
		45: function(e, t, a) {},
		50: function(e, t, a) {},
		51: function(e, t, a) {},
		52: function(e, t, a) {},
		53: function(e, t, a) {},
		54: function(e, t, a) {},
		58: function(e, t, a) {
			'use strict';
			a.r(t);
			var n = a(0),
				r = a.n(n),
				s = a(24),
				c = a.n(s),
				o = a(2),
				l = a(3),
				i = a(5),
				u = a(4),
				p = a(6),
				m = a(9),
				d = 'GET_TASK_LISTS_REQUEST',
				b = 'GET_TASK_LISTS_SUCCESS',
				E = 'GET_TASK_LISTS_EXCEPTION';
			function h() {
				return function(e) {
					e({ type: d, payload: '' }),
						fetch('api/taskLists')
							.then(function(e) {
								return e.json();
							})
							.then(function(t) {
								e({ type: b, payload: t });
							})
							.catch(function(t) {
								e({ type: E, payload: t });
							});
				};
			}
			var f = 'GET_TASKS_REQUEST',
				g = 'GET_TASKS_SUCCESS',
				y = 'GET_TASKS_ERROR',
				O = 'CREATE_TASK_REQUEST',
				v = 'CREATE_TASK_SUCCESS',
				k = 'CREATE_TASK_BAD',
				j = 'CREATE_TASK_ERROR',
				N = 'COMPLETE_TASK_REQUEST',
				T = 'COMPLETE_TASK_SUCCESS',
				w = 'COMPLETE_TASK_ERROR';
			function S() {
				return function(e) {
					e({ type: f, payload: '' }),
						fetch('api/tasks')
							.then(function(e) {
								return e.json();
							})
							.then(function(t) {
								e({ type: g, payload: t });
							})
							.catch(function(t) {
								e({ type: y, payload: t });
							});
				};
			}
			function C(e) {
				return function(t) {
					return t({ type: O, payload: e });
				};
			}
			var L = a(17),
				_ = (a(45),
				(function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this;
									return r.a.createElement(
										'header',
										{ className: 'header-main' },
										r.a.createElement(
											'nav',
											{
												className:
													'navbar navbar-expand-lg navbar-dark bg-dark h-100',
											},
											r.a.createElement(
												L.b,
												{
													className: 'navbar-brand',
													to: '/',
													onClick: function() {
														e.props.getTasks();
													},
												},
												'Logo'
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component)),
				A = Object(m.b)(
					function(e) {
						return { tasks: e.tasks, taskLists: e.taskLists };
					},
					function(e) {
						return {
							getTaskLists: function() {
								return e(h());
							},
							getTasks: function() {
								return e(S());
							},
						};
					}
				)(_),
				P = 'GET_PURPOSE_REQUEST',
				R = 'GET_PURPOSE_SUCCESS',
				U = 'GET_PURPOSE_EXCEPTION';
			var D = a(11),
				G = a(10),
				x = (a(50),
				(function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(
								this,
								Object(u.a)(t).call(this, e)
							)).D = function() {
								a.setState({ isOpen: !a.state.isOpen });
							}),
							(a.state = {
								isOpen: !!a.props.isOpen,
								isLoading: !!a.props.isLoading,
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this,
										t = r.a.createElement(
											'header',
											{
												onClick: this.D,
												className:
													'shadow-sm list-group-item list-group-item-action',
											},
											r.a.createElement('h5', null, this.props.name),
											r.a.createElement(D.a, {
												icon: this.state.isOpen ? G.a : G.b,
											})
										),
										a = this.props.list.map(function(t) {
											return r.a.createElement(
												'li',
												{
													key: t.id,
													className:
														'list-group-item list-group-item-action text-truncate',
													onClick: function() {
														return e.props.clickFunction(t.id);
													},
												},
												t.name
											);
										});
									this.state.isLoading &&
										((a = null),
										(t = r.a.createElement(
											'header',
											{
												className:
													'shadow-sm list-group-item list-group-item-action',
											},
											r.a.createElement('h5', null, this.props.name),
											r.a.createElement(
												'li',
												{ className: 'spinner-border spinner-border-sm' },
												r.a.createElement(
													'span',
													{ className: 'sr-only' },
													'Loading...'
												)
											)
										)));
									var n = this.state.isOpen
										? r.a.createElement(
												'ul',
												{ className: 'list-group list-group-flush' },
												a
										  )
										: '';
									return r.a.createElement(
										'div',
										{ className: 'listComponent' },
										t,
										n
									);
								},
							},
						]),
						t
					);
				})(r.a.Component)),
				F = (a(51),
				(function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'componentDidMount',
								value: function() {
									this.props.getTaskLists(), this.props.getPurposes();
								},
							},
							{
								key: 'render',
								value: function() {
									var e = this.props,
										t = e.taskLists,
										a = e.purposes;
									return r.a.createElement(
										'div',
										{ className: 'card rounded-0 h-100' },
										r.a.createElement(
											'div',
											{ className: 'card-body' },
											r.a.createElement(x, {
												name: 'Task lists',
												list: t.lists,
												isOpen: !0,
												isLoading: t.isLoading,
												clickFunction: this.props.getTasksByList,
											}),
											r.a.createElement(x, {
												name: 'Purposes',
												list: a.purposes,
												isLoading: t.isLoading,
												clickFunction: this.props.getTasksByPurpose,
											})
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component)),
				K = Object(m.b)(
					function(e) {
						return { taskLists: e.taskLists, purposes: e.purposes };
					},
					function(e) {
						return {
							getTaskLists: function() {
								return e(h());
							},
							getPurposes: function() {
								return e(function(e) {
									e({ type: P, payload: '' }),
										fetch('api/purposes')
											.then(function(e) {
												return e.json();
											})
											.then(function(t) {
												e({ type: R, payload: t });
											})
											.catch(function(t) {
												e({ type: U, payload: t });
											});
								});
							},
							getTasksByList: function(t) {
								return e(
									(function(e) {
										return function(t) {
											t({ type: f, payload: '' }),
												fetch('api/taskLists/' + e + '/tasks')
													.then(function(e) {
														return e.json();
													})
													.then(function(e) {
														t({ type: g, payload: e });
													})
													.catch(function(e) {
														t({ type: y, payload: e });
													});
										};
									})(t)
								);
							},
							getTasksByPurpose: function(t) {
								return e(
									(function(e) {
										return function(t) {
											t({ type: f, payload: '' }),
												fetch('api/purposes/' + e + '/tasks')
													.then(function(e) {
														return e.json();
													})
													.then(function(e) {
														t({ type: g, payload: e });
													})
													.catch(function(e) {
														t({ type: y, payload: e });
													});
										};
									})(t)
								);
							},
						};
					}
				)(F),
				I = a(21),
				B = (a(52), a(53), { month: 'long', day: 'numeric' }),
				Q = { year: 'numeric', month: 'long', day: 'numeric' },
				M = {
					timezone: 'UTC',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
				},
				J = (function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
								isLoading: !1,
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this,
										t = this.props.tasks.map(function(t) {
											var a = new Date(Date.parse(t.creationTime)),
												n = new Date(),
												s = a.toLocaleString('ru', M);
											return (
												a.getDay() !== n.getDate() &&
													(s = a.toLocaleString('ru', B)),
												a.getFullYear() !== n.getFullYear() &&
													(s = a.toLocaleString('ru', Q)),
												r.a.createElement(
													'tr',
													{ key: t.id },
													r.a.createElement(
														'td',
														null,
														r.a.createElement('input', {
															onClick: function() {
																e.props.selectTask(t.id);
															},
															type: 'checkbox',
														})
													),
													r.a.createElement('td', null, t.name),
													r.a.createElement(
														'td',
														null,
														t.taskLists.map(function(e) {
															return r.a.createElement(
																'div',
																{ key: e.id },
																e.name
															);
														})
													),
													r.a.createElement('td', null, s)
												)
											);
										});
									return r.a.createElement(
										'table',
										{ className: 'table table-hover' },
										r.a.createElement(
											'thead',
											null,
											r.a.createElement(
												'tr',
												null,
												r.a.createElement(
													'th',
													{ scope: 'col' },
													r.a.createElement('input', { type: 'checkbox' })
												),
												r.a.createElement(
													'th',
													{ scope: 'col' },
													'\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435'
												),
												r.a.createElement(
													'th',
													{ scope: 'col' },
													'\u0421\u043f\u0438\u0441\u043e\u043a'
												),
												r.a.createElement(
													'th',
													{ scope: 'col' },
													'\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f'
												)
											)
										),
										r.a.createElement('tbody', { className: '' }, t)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				X = Object(m.b)(function(e) {
					return {
						selectTask: function(t) {
							return e(C(t));
						},
					};
				})(J),
				z = (a(18),
				(function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									return r.a.createElement(
										'div',
										{ className: 'btn-group' },
										r.a.createElement(
											'button',
											{
												id: 'btnGroupDrop2',
												type: 'button',
												className: 'btn btn-secondary dropdown-toggle',
												'data-toggle': 'dropdown',
												'aria-haspopup': 'true',
												'aria-expanded': 'false',
											},
											r.a.createElement(D.a, { icon: G.d })
										),
										r.a.createElement(
											'div',
											{ className: 'dropdown-menu' },
											r.a.createElement(
												'p',
												{ className: '' },
												'\u041e\u0442\u043b\u043e\u0436\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443:'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'1 \u0434\u0435\u043d\u044c'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'2 \u0434\u043d\u044f'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'3 \u0434\u043d\u044f'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'1 \u043d\u0435\u0434\u0435\u043b\u044e'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'2 \u043d\u0435\u0434\u0435\u043b\u0438'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'1 \u043c\u0435\u0441\u044f\u0446'
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component)),
				Y = (function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this;
									return r.a.createElement(
										'button',
										{
											type: 'button',
											className: 'btn btn-secondary',
											onClick: function() {
												e.props.selected.forEach(function(t) {
													e.props.completeTask(t, !0);
												}),
													e.props.getTasks();
											},
										},
										r.a.createElement(D.a, { icon: G.e })
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				H = (function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									return r.a.createElement(
										'div',
										{ className: 'btn-group pr-2' },
										r.a.createElement(Y, {
											completeTask: this.props.completeTask,
											selected: this.props.selected,
											getTasks: this.props.getTasks,
										}),
										r.a.createElement(z, null)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				W = (function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									return r.a.createElement(
										'div',
										{ className: 'btn-group' },
										r.a.createElement(
											'button',
											{
												id: 'btnGroupDrop2',
												type: 'button',
												className: 'btn btn-secondary dropdown-toggle',
												'data-toggle': 'dropdown',
												'aria-haspopup': 'true',
												'aria-expanded': 'false',
											},
											r.a.createElement(D.a, { icon: G.f })
										),
										r.a.createElement(
											'div',
											{ className: 'dropdown-menu' },
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u0412\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u041d\u0438\u0437\u043a\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442'
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				q = (function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									return r.a.createElement(
										'div',
										{ className: 'btn-group' },
										r.a.createElement(
											'button',
											{
												id: 'btnGroupDrop2',
												type: 'button',
												className: 'btn btn-secondary dropdown-toggle',
												'data-toggle': 'dropdown',
												'aria-haspopup': 'true',
												'aria-expanded': 'false',
											},
											r.a.createElement(D.a, { icon: G.c })
										),
										r.a.createElement(
											'div',
											{ className: 'dropdown-menu' },
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430'
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				V = (function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									return r.a.createElement(
										'div',
										{ className: 'btn-group' },
										r.a.createElement(
											'button',
											{
												id: 'btnGroupDrop3',
												type: 'button',
												className: 'btn btn-secondary dropdown-toggle',
												'data-toggle': 'dropdown',
												'aria-haspopup': 'true',
												'aria-expanded': 'false',
											},
											r.a.createElement(D.a, { icon: G.h })
										),
										r.a.createElement(
											'div',
											{ className: 'dropdown-menu' },
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430'
											),
											r.a.createElement(
												'button',
												{ className: 'dropdown-item', type: 'button' },
												'\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430'
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				Z = (function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									return r.a.createElement(
										'div',
										{ className: 'btn-group pr-2' },
										r.a.createElement(W, null),
										r.a.createElement(q, null),
										r.a.createElement(V, null)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				$ = (function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
								open: !!a.props.open,
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e;
									return (
										(e = this.state.open
											? r.a.createElement(
													r.a.Fragment,
													null,
													r.a.createElement(H, {
														completeTask: this.props.completeTask,
														selected: this.props.selected,
														getTasks: this.props.getTasks,
													}),
													r.a.createElement(Z, null)
											  )
											: null),
										r.a.createElement('div', { className: 'btn-toolbar' }, e)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				ee = (function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
								name: '',
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this;
									return r.a.createElement(
										'div',
										{ className: 'input-group mb-3' },
										r.a.createElement('input', {
											id: 'createTaskField',
											type: 'text',
											className: 'form-control',
											onChange: function() {
												e.setState({
													name: document.getElementById('createTaskField')
														.value,
												});
											},
										}),
										0 === this.state.name.length
											? null
											: r.a.createElement(
													'div',
													{ className: 'input-group-append' },
													r.a.createElement(
														'button',
														{
															className: 'btn btn-outline-secondary',
															type: 'button',
															onClick: function() {
																e.props.createTask(e.state.name),
																	e.props.getTasks();
															},
														},
														r.a.createElement(D.a, { icon: G.g })
													)
											  )
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				te = (function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
								page: 'active',
								selected: a.props.selected,
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{ key: 'componentWillReceiveProps', value: function() {} },
							{
								key: 'render',
								value: function() {
									var e = this,
										t = this.props.tasks,
										a = [];
									return (
										'active' === this.state.page &&
											t.tasks.forEach(function(e) {
												!1 === e.completed && a.push(e);
											}),
										'completed' === this.state.page &&
											t.tasks.forEach(function(e) {
												!0 === e.completed && a.push(e);
											}),
										r.a.createElement(
											'div',
											{ className: 'card rounded-0 h-100' },
											r.a.createElement(
												'div',
												{ className: 'card-header' },
												r.a.createElement(
													'ul',
													{ className: 'nav nav-tabs card-header-tabs' },
													r.a.createElement(
														'li',
														{ className: 'nav-item' },
														r.a.createElement(
															'button',
															{
																className: 'nav-link active',
																onClick: function() {
																	e.setState({ page: 'active' });
																},
															},
															'\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435'
														)
													),
													r.a.createElement(
														'li',
														{ className: 'nav-item' },
														r.a.createElement(
															'button',
															{
																className: 'nav-link active',
																onClick: function() {
																	e.setState({ page: 'completed' });
																},
															},
															'\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435'
														)
													)
												)
											),
											r.a.createElement(
												'div',
												{ className: 'card-body' },
												r.a.createElement(
													'div',
													null,
													0 === this.props.selected.length
														? null
														: r.a.createElement($, {
																open: !0,
																selected: this.props.selected,
																getTasks: this.props.getTasks,
														  })
												),
												r.a.createElement(
													'div',
													null,
													r.a.createElement(ee, {
														createTask: this.props.addTask,
														getTasks: this.props.getTasks,
													})
												),
												r.a.createElement(X, { tasks: a })
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				ae = Object(m.b)(
					function(e) {
						return { tasks: e.tasks, selected: e.tasks.selected };
					},
					function(e) {
						return {
							addTask: function(t) {
								return e(
									(function(e) {
										return function(t) {
											t({ type: O, payload: '' });
											var a = { name: e },
												n = {
													method: 'post',
													headers: {
														Accept: 'application/json, text/plain, */*',
														'Content-Type': 'application/json',
													},
													body: JSON.stringify(a),
												};
											fetch('api/tasks', n)
												.then(function(e) {
													return e;
												})
												.then(function(e) {
													201 === e.status
														? t({ type: v, payload: e })
														: t({ type: k, payload: e });
												})
												.catch(function(e) {
													200 === e.status && t({ type: j, payload: e });
												});
										};
									})(t)
								);
							},
							getTasks: function() {
								return e(S());
							},
							selectTask: function(t, a) {
								return e(C(t));
							},
						};
					}
				)(te),
				ne = {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
					timezone: 'UTC',
					hour: 'numeric',
					minute: 'numeric',
				},
				re = (function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(
								this,
								Object(u.a)(t).call(this, e)
							)).state = {}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this.props.task,
										t = new Date(e.creationTime);
									return r.a.createElement(
										'div',
										{ className: 'card rounded-0 h-100' },
										r.a.createElement(
											'div',
											{ className: 'card-body' },
											r.a.createElement(
												'p',
												null,
												r.a.createElement(
													'span',
													{ className: 'h5 pr-2' },
													e.name
												)
											),
											r.a.createElement(
												'p',
												null,
												r.a.createElement(
													'span',
													{ className: 'h5 pr-2' },
													'\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: '
												),
												isFinite(t) ? t.toLocaleString('ru', ne) : null
											),
											r.a.createElement(
												'p',
												null,
												r.a.createElement(
													'span',
													{ className: 'h5 pr-2' },
													'\u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f: '
												),
												isFinite(e.reminders)
													? null
													: e.reminders.map(function(e) {
															var t = new Date(e.triggerTime);
															return r.a.createElement(
																'span',
																{ key: e.id },
																t.toLocaleString('ru', ne)
															);
													  })
											),
											r.a.createElement(
												'p',
												null,
												r.a.createElement(
													'span',
													{ className: 'h5 pr-2' },
													'\u0426\u0435\u043b\u044c: '
												),
												isFinite(e.purpouse) ? null : e.purpouse.name
											),
											r.a.createElement(
												'p',
												null,
												r.a.createElement(
													'span',
													{ className: 'h5 pr-2' },
													'\u0421\u043f\u0438\u0441\u043a\u0438: '
												),
												isFinite(e.taskLists)
													? null
													: e.taskLists.map(function(e) {
															return r.a.createElement(
																'span',
																{ key: e.id },
																e.name
															);
													  })
											),
											r.a.createElement(
												'p',
												null,
												r.a.createElement(
													'span',
													{ className: 'h5 pr-2' },
													'\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: '
												),
												e.description
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				se = (function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
								selected: [],
							}),
							(a.selectTask = a.selectTask.bind(Object(I.a)(a))),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'componentDidMount',
								value: function() {
									this.props.getTasks();
								},
							},
							{
								key: 'selectTask',
								value: function(e) {
									for (
										var t = this.state.selected, a = !1, n = 0;
										n <= t.length;
										n++
									)
										t[n] === e && (t.splice(n, 1), (a = !0));
									!1 === a && (t = t.concat(e)),
										this.setState({ selected: t }),
										console.log(t);
								},
							},
							{
								key: 'render',
								value: function() {
									var e,
										t,
										a = this,
										n = this.props.tasks;
									(0 === this.state.selected.length &&
										(e = r.a.createElement('p', null, 'None')),
									1 === this.state.selected.length) &&
										(n.tasks.forEach(function(e) {
											e.id === a.state.selected[0] && (t = e);
										}),
										(e = r.a.createElement(re, { task: t })),
										console.log(e));
									return (
										this.state.selected.length > 1 &&
											((e = r.a.createElement(
												'p',
												null,
												this.state.selected.length
											)),
											console.log(e)),
										r.a.createElement(
											'div',
											{ className: 'container-fluid h-100 tasks' },
											r.a.createElement(
												'div',
												{ className: 'row h-100' },
												r.a.createElement(
													'div',
													{ className: 'col-lg-7 col-sm-12 p-0' },
													r.a.createElement(ae, { selectTask: this.selectTask })
												),
												r.a.createElement(
													'div',
													{ className: 'col-5 p-0' },
													r.a.createElement('span', null, e)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				ce = Object(m.b)(
					function(e) {
						return { tasks: e.tasks };
					},
					function(e) {
						return {
							getTasks: function() {
								return e(S());
							},
						};
					}
				)(se),
				oe = 'GET_PURPOSE_REQUEST',
				le = 'GET_PURPOSE_SUCCESS',
				ie = 'CHECK_LOGIN_BAD',
				ue = 'GET_PURPOSE_EXCEPTION';
			function pe(e, t) {
				return function(a) {
					a({ type: oe, payload: '' });
					var n = { Login: e, Password: t },
						r = {
							method: 'post',
							headers: {
								Accept: 'application/json, text/plain, */*',
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(n),
						};
					fetch('api/Auth', r)
						.then(function(e) {
							return e;
						})
						.then(function(e) {
							200 === e.status
								? a({ type: le, payload: e })
								: a({ type: ie, payload: e });
						})
						.catch(function(e) {
							200 === e.status && a({ type: ue, payload: e });
						});
				};
			}
			var me = a(19),
				de = (function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
								login: '',
								password: '',
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this;
									return !0 === this.props.auth.isLogged
										? r.a.createElement(me.a, { to: '/' })
										: r.a.createElement(
												r.a.Fragment,
												null,
												r.a.createElement(
													'main',
													{ className: 'main h-100' },
													r.a.createElement(
														'div',
														{ className: 'container-fluid h-100' },
														r.a.createElement(
															'div',
															{ className: 'row h-100' },
															r.a.createElement(
																'section',
																{
																	className:
																		'p-0 d-flex align-items-center justify-content-center w-100',
																},
																r.a.createElement(
																	'form',
																	{ className: 'card' },
																	r.a.createElement(
																		'div',
																		{ className: 'card-body' },
																		r.a.createElement(
																			'div',
																			{ className: 'form-group row' },
																			r.a.createElement(
																				'label',
																				{
																					for: 'login',
																					className: 'col-sm-4 col-form-label',
																				},
																				'\u041b\u043e\u0433\u0438\u043d'
																			),
																			r.a.createElement(
																				'div',
																				{ class: 'col-sm-6' },
																				r.a.createElement('input', {
																					id: 'login',
																					type: 'text',
																					onChange: function() {
																						var t = document.getElementById(
																							'login'
																						).value;
																						e.setState({ login: t });
																					},
																				})
																			)
																		),
																		r.a.createElement(
																			'div',
																			{ class: 'form-group row' },
																			r.a.createElement(
																				'label',
																				{
																					for: 'password',
																					className: 'col-sm-4 col-form-label',
																				},
																				'\u041f\u0430\u0440\u043e\u043b\u044c'
																			),
																			r.a.createElement(
																				'div',
																				{ className: 'col-sm-8' },
																				r.a.createElement('input', {
																					id: 'password',
																					type: 'password',
																					onChange: function() {
																						var t = document.getElementById(
																							'password'
																						).value;
																						e.setState({ password: t });
																					},
																				})
																			)
																		),
																		r.a.createElement(
																			'div',
																			{ className: 'form-group row' },
																			r.a.createElement(
																				'div',
																				{
																					className: 'col-sm-12 col-form-label',
																				},
																				r.a.createElement(
																					L.b,
																					{ to: '/register' },
																					'\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?'
																				)
																			)
																		),
																		r.a.createElement(
																			'button',
																			{
																				type: 'button',
																				className:
																					'btn-block btn btn-outline-dark',
																				onClick: function() {
																					e.props.checkAuth(
																						e.state.login,
																						e.state.password
																					);
																				},
																			},
																			'\u0412\u043e\u0439\u0442\u0438'
																		)
																	)
																)
															)
														)
													)
												)
										  );
								},
							},
						]),
						t
					);
				})(r.a.Component),
				be = Object(m.b)(
					function(e) {
						return { auth: e.auth };
					},
					function(e) {
						return {
							checkAuth: function(t, a) {
								return e(pe(t, a));
							},
						};
					}
				)(de),
				Ee = (a(54),
				(function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
								login: '',
								password: '',
								isCreated: !1,
							}),
							a
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this;
									return !0 === this.state.isCreated
										? r.a.createElement(me.a, { to: '/auth' })
										: r.a.createElement(
												r.a.Fragment,
												null,
												r.a.createElement(
													'main',
													{ className: 'main h-100' },
													r.a.createElement(
														'div',
														{ className: 'container-fluid h-100' },
														r.a.createElement(
															'div',
															{ className: 'row h-100' },
															r.a.createElement(
																'section',
																{
																	className:
																		'p-0 d-flex align-items-center justify-content-center w-100',
																},
																r.a.createElement(
																	'form',
																	{ className: 'card' },
																	r.a.createElement(
																		'div',
																		{ className: 'card-body' },
																		r.a.createElement(
																			'div',
																			{ class: 'form-group row' },
																			r.a.createElement(
																				'label',
																				{
																					for: 'login',
																					className: 'col-sm-4 col-form-label',
																				},
																				'\u041b\u043e\u0433\u0438\u043d'
																			),
																			r.a.createElement(
																				'div',
																				{ class: 'col-sm-6' },
																				r.a.createElement('input', {
																					id: 'login',
																					type: 'text',
																					onChange: function() {
																						var t = document.getElementById(
																							'login'
																						).value;
																						e.setState({ login: t });
																					},
																				})
																			)
																		),
																		r.a.createElement(
																			'div',
																			{ class: 'form-group row' },
																			r.a.createElement(
																				'label',
																				{
																					for: 'password',
																					className: 'col-sm-4 col-form-label',
																				},
																				'\u041f\u0430\u0440\u043e\u043b\u044c'
																			),
																			r.a.createElement(
																				'div',
																				{ class: 'col-sm-8' },
																				r.a.createElement('input', {
																					id: 'password',
																					type: 'password',
																					onChange: function() {
																						var t = document.getElementById(
																							'password'
																						).value;
																						e.setState({ password: t });
																					},
																				})
																			)
																		),
																		r.a.createElement(
																			'div',
																			{ className: 'form-group row' },
																			r.a.createElement(
																				'div',
																				{
																					className: 'col-sm-12 col-form-label',
																				},
																				r.a.createElement(
																					L.b,
																					{ to: '/auth' },
																					'\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?'
																				)
																			)
																		),
																		r.a.createElement(
																			'button',
																			{
																				type: 'button',
																				className:
																					'btn-block btn btn-outline-dark',
																				onClick: function() {
																					e.props.checkAuth(
																						e.state.login,
																						e.state.password
																					);
																				},
																			},
																			'\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f'
																		)
																	)
																)
															)
														)
													)
												)
										  );
								},
							},
						]),
						t
					);
				})(r.a.Component)),
				he = Object(m.b)(
					function(e) {
						return { auth: e.auth };
					},
					function(e) {
						return {
							checkAuth: function(t, a) {
								return e(pe(t, a));
							},
						};
					}
				)(Ee),
				fe = (function(e) {
					function t() {
						return (
							Object(o.a)(this, t),
							Object(i.a)(this, Object(u.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(p.a)(t, e),
						Object(l.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this,
										t = r.a.createElement(
											r.a.Fragment,
											null,
											r.a.createElement(A, null),
											r.a.createElement(
												'main',
												{ className: 'main' },
												r.a.createElement(
													'div',
													{ className: 'container-fluid h-100' },
													r.a.createElement(
														'div',
														{ className: 'row h-100' },
														r.a.createElement(
															'aside',
															{ className: 'col-lg-2 col-sm-4 p-0' },
															r.a.createElement(K, null)
														),
														r.a.createElement(
															'section',
															{ className: 'col-lg-10 col-sm-8 p-0' },
															r.a.createElement(ce, null)
														)
													)
												)
											)
										);
									return r.a.createElement(
										L.a,
										null,
										r.a.createElement(
											me.d,
											null,
											r.a.createElement(me.b, { path: '/auth', component: be }),
											r.a.createElement(me.b, {
												path: '/register',
												component: he,
											}),
											r.a.createElement(me.b, {
												path: '/',
												children: function() {
													return e.props.auth.isLogged
														? t
														: r.a.createElement(me.a, { to: '/auth' });
												},
											})
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				ge = Object(m.b)(function(e) {
					return { tasks: e.tasks, taskLists: e.taskLists, auth: e.auth };
				})(fe),
				ye = a(20),
				Oe = a(8),
				ve = 'SELECT_TASK';
			var ke = {
				tasks: [
					{
						id: 1,
						name: 'testTask',
						description: 'dddddddddddddddddddddddddd',
						completed: !1,
						creationTime: '2019-05-14T20:18:02.4023759',
						purpouse: null,
						reminders: [],
						taskLists: [{ id: 1, name: 'testTaskList', color: 'red' }],
					},
				],
				selected: [],
				loading: !1,
				errors: [],
			};
			var je = {
				lists: [{ id: 1, name: 'testTaskList', color: 'red' }],
				isLoading: !1,
				errors: [],
			};
			var Ne = {
				purposes: [
					{
						id: 1,
						name: 'testPurpose',
						creationTime: '2019-05-14T20:18:02.4212122',
						description: null,
					},
				],
				isLoading: !1,
				errors: [],
			};
			var Te = { isLogged: !1, isLoading: !1, token: '', errors: [] };
			var we = Object(ye.c)({
					tasks: function() {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: ke,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case f:
								return Object(Oe.a)({}, e, { loading: !0 });
							case g:
								return Object(Oe.a)({}, e, { loading: !1, tasks: t.payload });
							case y:
								return Object(Oe.a)({}, e, { loading: !1, errors: t.payload });
							case O:
								return Object(Oe.a)({}, e, { loading: !0 });
							case v:
								return Object(Oe.a)({}, e, {
									loading: !1,
									tasks: e.tasks.concat(t.payload),
								});
							case k:
								return Object(Oe.a)({}, e, { loading: !1 });
							case j:
								return Object(Oe.a)({}, e, { loading: !1, err: t.payload });
							case N:
								return Object(Oe.a)({}, e, { loading: !0 });
							case T:
								return Object(Oe.a)({}, e, { loading: !1, selected: [] });
							case w:
								return Object(Oe.a)({}, e, { loading: !1, err: t.payload });
							case ve:
								for (var a = !1, n = e.selected, r = 0; r < n.length; r++)
									n[r] === t.payload && ((a = !0), n.splice(r, 1));
								return Object(Oe.a)({}, e, {
									selected: a ? n : n.join(t.payload),
								});
							default:
								return e;
						}
					},
					taskLists: function() {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: je,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case d:
								return Object(Oe.a)({}, e, { isLoading: !0 });
							case b:
								return Object(Oe.a)({}, e, { isLoading: !1, lists: t.payload });
							case E:
								return Object(Oe.a)({}, e, {
									isLoading: !1,
									errors: t.payload,
								});
							default:
								return e;
						}
					},
					purposes: function() {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: Ne,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case P:
								return Object(Oe.a)({}, e, { isLoading: !0 });
							case R:
								return Object(Oe.a)({}, e, { isLoading: !1, lists: t.payload });
							case U:
								return Object(Oe.a)({}, e, {
									isLoading: !1,
									errors: t.payload,
								});
							default:
								return e;
						}
					},
					auth: function() {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: Te,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case oe:
								return Object(Oe.a)({}, e, { isLoading: !0 });
							case le:
								return Object(Oe.a)({}, e, {
									isLoading: !1,
									isLogged: !0,
									token: t.payload,
								});
							case ie:
								return Object(Oe.a)({}, e, { isLoading: !1 });
							case ue:
								return Object(Oe.a)({}, e, {
									isLoading: !1,
									errors: t.payload,
								});
							default:
								return e;
						}
					},
				}),
				Se = a(34),
				Ce = a.n(Se),
				Le = a(35),
				_e = Object(ye.d)(we, Object(ye.a)(Ce.a, Le.a));
			a(55), a(56);
			c.a.render(
				r.a.createElement(m.a, { store: _e }, r.a.createElement(ge, null)),
				document.getElementById('root')
			);
		},
	},
	[[36, 1, 2]],
]);
//# sourceMappingURL=main.e7f14494.chunk.js.map
