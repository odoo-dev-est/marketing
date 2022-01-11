# -*- coding: utf-8 -*-
{
    'name': "orm_unlink",

    'summary': """ Demo example to drop order lines
       """,

    'description': """
        Tutorial model about Unlink
    """,

    'author': "",
    'website': "",

    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['sale'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/sale_views.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
       
    ],
}
