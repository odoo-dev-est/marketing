# -*- coding: utf-8 -*-
import requests

from odoo import models, exceptions

class SaleOrder(models.Model):
    _inherit = 'sale.order'


    def drop_lines(self):
        self.ensure_one() #Se asegura de que se llama en el record que corresponde
        if self.order_line:
            self.order_line.unlink() #Unlink borra los registros
        else:
            raise exceptions.ValidationError("No hay lineas")

    def test_request(self):

        url = "http://127.0.0.1:5000/products"
        response = requests.request("GET", url)
        print(response)
        

