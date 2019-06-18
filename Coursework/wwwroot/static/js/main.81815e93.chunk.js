(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		11: function(e, t, a) {},
		25: function(e, t, a) {
			e.exports = a(46);
		},
		34: function(e, t, a) {},
		38: function(e, t, a) {},
		39: function(e, t, a) {},
		40: function(e, t, a) {},
		41: function(e, t, a) {},
		42: function(e, t, a) {},
		46: function(e, t, a) {
			'use strict';
			a.r(t);
			var n = a(0),
				r = a.n(n),
				s = a(16),
				c = a.n(s),
				o = a(1),
				l = a(2),
				i = a(4),
				u = a(3),
				p = a(5),
				m = a(10),
				d = 'GET_TASK_LISTS_REQUEST',
				b = 'GET_TASK_LISTS_SUCCESS',
				h = 'GET_TASK_LISTS_EXCEPTION';
			function E() {
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
								e({ type: h, payload: t });
							});
				};
			}
			a(34);
			var f = (function(e) {
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
										'header',
										{ className: 'header-main' },
										r.a.createElement(
											'nav',
											{
												className:
													'navbar navbar-expand-lg navbar-dark bg-dark h-100',
											},
											r.a.createElement(
												'button',
												{ className: 'navbar-brand' },
												'Logo'
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				y = Object(m.b)(
					function(e) {
						return { tasks: e.tasks, taskLists: e.taskLists };
					},
					function(e) {
						return {
							getTaskLists: function() {
								return e(E());
							},
						};
					}
				)(f),
				O = 'GET_PURPOSE_REQUEST',
				g = 'GET_PURPOSE_SUCCESS',
				j = 'GET_PURPOSE_EXCEPTION';
			var v = 'GET_TASKS_REQUEST',
				k = 'GET_TASKS_SUCCESS',
				N = 'GET_TASKS_ERROR';
			var T = a(8),
				w = a(7),
				L = (a(38),
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
											r.a.createElement(T.a, {
												icon: this.state.isOpen ? w.a : w.b,
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
				S = (a(39),
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
											r.a.createElement(L, {
												name: 'Task lists',
												list: t.lists,
												isOpen: !0,
												isLoading: t.isLoading,
												clickFunction: this.props.getTasksByList,
											}),
											r.a.createElement(L, {
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
				C = Object(m.b)(
					function(e) {
						return { taskLists: e.taskLists, purposes: e.purposes };
					},
					function(e) {
						return {
							getTaskLists: function() {
								return e(E());
							},
							getPurposes: function() {
								return e(function(e) {
									e({ type: O, payload: '' }),
										fetch('api/purposes')
											.then(function(e) {
												return e.json();
											})
											.then(function(t) {
												e({ type: g, payload: t });
											})
											.catch(function(t) {
												e({ type: j, payload: t });
											});
								});
							},
							getTasksByList: function(t) {
								return e(
									(function(e) {
										return function(t) {
											t({ type: v, payload: '' }),
												fetch('api/taskLists/' + e + '/tasks')
													.then(function(e) {
														return e.json();
													})
													.then(function(e) {
														t({ type: k, payload: e });
													})
													.catch(function(e) {
														t({ type: N, payload: e });
													});
										};
									})(t)
								);
							},
							getTasksByPurpose: function(t) {
								return e(
									(function(e) {
										return function(t) {
											t({ type: v, payload: '' }),
												fetch('api/purposes/' + e + '/tasks')
													.then(function(e) {
														return e.json();
													})
													.then(function(e) {
														t({ type: k, payload: e });
													})
													.catch(function(e) {
														t({ type: N, payload: e });
													});
										};
									})(t)
								);
							},
						};
					}
				)(S),
				_ = a(14),
				D = (a(40), a(41), { month: 'long', day: 'numeric' }),
				P = { year: 'numeric', month: 'long', day: 'numeric' },
				G = {
					timezone: 'UTC',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
				},
				F = (function(e) {
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
												s = a.toLocaleString('ru', G);
											return (
												a.getDay() !== n.getDate() &&
													(s = a.toLocaleString('ru', D)),
												a.getFullYear() !== n.getFullYear() &&
													(s = a.toLocaleString('ru', P)),
												r.a.createElement(
													'tr',
													{ key: t.id },
													r.a.createElement(
														'td',
														null,
														r.a.createElement('input', {
															onChange: function() {
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
				U = (a(11),
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
											r.a.createElement(T.a, { icon: w.d })
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
				x = (function(e) {
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
										'button',
										{ type: 'button', className: 'btn btn-secondary' },
										r.a.createElement(T.a, { icon: w.e })
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				R = (function(e) {
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
										r.a.createElement(x, null),
										r.a.createElement(U, null)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				A = (function(e) {
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
										r.a.createElement(
											'div',
											{ className: 'btn-group' },
											r.a.createElement(
												'button',
												{
													id: 'btnGroupDrop1',
													type: 'button',
													className: 'btn btn-secondary dropdown-toggle',
													'data-toggle': 'dropdown',
													'aria-haspopup': 'true',
													'aria-expanded': 'false',
												},
												r.a.createElement(T.a, { icon: w.g })
											),
											r.a.createElement(
												'div',
												{ className: 'dropdown-menu' },
												r.a.createElement(
													'button',
													{ className: 'dropdown-item', type: 'button' },
													'\u0412\u0441\u0435'
												),
												r.a.createElement(
													'button',
													{ className: 'dropdown-item', type: 'button' },
													'\u041d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e'
												),
												r.a.createElement('hr', null),
												r.a.createElement(
													'button',
													{ className: 'dropdown-item', type: 'button' },
													'\u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f'
												),
												r.a.createElement(
													'button',
													{ className: 'dropdown-item', type: 'button' },
													'\u041d\u0430 \u0437\u0430\u0432\u0442\u0440\u0430'
												),
												r.a.createElement(
													'button',
													{ className: 'dropdown-item', type: 'button' },
													'\u041f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u044b\u0435'
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
				K = (function(e) {
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
											r.a.createElement(T.a, { icon: w.f })
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
				I = (function(e) {
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
											r.a.createElement(T.a, { icon: w.c })
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
				B = (function(e) {
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
											r.a.createElement(T.a, { icon: w.h })
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
				Q = (function(e) {
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
										r.a.createElement(K, null),
										r.a.createElement(I, null),
										r.a.createElement(B, null)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				z = (function(e) {
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
									var e;
									return (
										(e =
											this.props.selected.length > 0
												? r.a.createElement(
														r.a.Fragment,
														null,
														r.a.createElement(A, null),
														r.a.createElement(R, null),
														r.a.createElement(Q, null)
												  )
												: r.a.createElement(A, null)),
										r.a.createElement('div', { className: 'btn-toolbar' }, e)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				J = (function(e) {
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
							{
								key: 'componentWillReceiveProps',
								value: function() {
									this.setState({ selected: this.props.selected });
								},
							},
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
												r.a.createElement(z, { selected: this.props.selected }),
												r.a.createElement(F, {
													tasks: a,
													selectTask: this.props.selectTask,
												})
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				M = Object(m.b)(
					function(e) {
						return { tasks: e.tasks };
					},
					function(e) {
						return {};
					}
				)(J),
				X = {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
					timezone: 'UTC',
					hour: 'numeric',
					minute: 'numeric',
				},
				Y = (function(e) {
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
												isFinite(t) ? t.toLocaleString('ru', X) : null
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
																t.toLocaleString('ru', X)
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
				W = (function(e) {
					function t(e) {
						var a;
						return (
							Object(o.a)(this, t),
							((a = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
								selected: [],
							}),
							(a.selectTask = a.selectTask.bind(Object(_.a)(a))),
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
										(e = r.a.createElement(Y, { task: t })),
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
													r.a.createElement(M, {
														selectTask: this.selectTask,
														selected: this.state.selected,
													})
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
				q = Object(m.b)(
					function(e) {
						return { tasks: e.tasks };
					},
					function(e) {
						return {
							getTasks: function() {
								return e(function(e) {
									e({ type: v, payload: '' }),
										fetch('api/tasks')
											.then(function(e) {
												return e.json();
											})
											.then(function(t) {
												e({ type: k, payload: t });
											})
											.catch(function(t) {
												e({ type: N, payload: t });
											});
								});
							},
						};
					}
				)(W),
				H = (a(42),
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
										r.a.Fragment,
										null,
										r.a.createElement(y, null),
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
														r.a.createElement(C, null)
													),
													r.a.createElement(
														'section',
														{ className: 'col-lg-10 col-sm-8 p-0' },
														r.a.createElement(q, null)
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
				V = Object(m.b)(function(e) {
					return { tasks: e.tasks, taskLists: e.taskLists };
				})(H),
				Z = a(13),
				$ = a(9),
				ee = 'SELECT_TASK';
			var te = {
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
			var ae = {
				lists: [{ id: 1, name: 'testTaskList', color: 'red' }],
				isLoading: !1,
				errors: [],
			};
			var ne = {
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
			var re = Object(Z.c)({
					tasks: function() {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: te,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case v:
								return Object($.a)({}, e, { loading: !0 });
							case k:
								return Object($.a)({}, e, { loading: !1, tasks: t.payload });
							case N:
								return Object($.a)({}, e, { loading: !1, errors: t.payload });
							case ee:
								return Object($.a)({}, e, {
									selected: e.selected.push(t.payload),
								});
							default:
								return e;
						}
					},
					taskLists: function() {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: ae,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case d:
								return Object($.a)({}, e, { isLoading: !0 });
							case b:
								return Object($.a)({}, e, { isLoading: !1, lists: t.payload });
							case h:
								return Object($.a)({}, e, { isLoading: !1, errors: t.payload });
							default:
								return e;
						}
					},
					purposes: function() {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: ne,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case O:
								return Object($.a)({}, e, { isLoading: !0 });
							case g:
								return Object($.a)({}, e, { isLoading: !1, lists: t.payload });
							case j:
								return Object($.a)({}, e, { isLoading: !1, errors: t.payload });
							default:
								return e;
						}
					},
				}),
				se = a(23),
				ce = a.n(se),
				oe = a(24),
				le = Object(Z.d)(re, Object(Z.a)(ce.a, oe.a));
			a(43), a(44);
			c.a.render(
				r.a.createElement(m.a, { store: le }, r.a.createElement(V, null)),
				document.getElementById('root')
			);
		},
	},
	[[25, 1, 2]],
]);
//# sourceMappingURL=main.81815e93.chunk.js.map
